import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find dishes by user email
    const dishes = await menuCollection.find({ email }).toArray();

    return NextResponse.json(dishes);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to fetch user dishes" },
      { status: 500 }
    );
  }
}
