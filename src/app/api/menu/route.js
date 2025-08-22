import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");
    // Use the URL object to get query parameters
    const { searchParams } = new URL(request.url);
    const display = searchParams.get("display"); 
    let query = {};
    if (display) {
      query = { display: display };
    }
    const menu = await menuCollection.find(query).toArray();
    return NextResponse.json(menu);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to fetch menu" }, { status: 500 });
  }
}
// added dishes 
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");

    const newDish = await request.json();
    const result = await menuCollection.insertOne(newDish);
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to add dish" }, { status: 500 });
  }
}