import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("food-cart");

    const items = await db.collection("items").find({}).toArray();

    return NextResponse.json({ items });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to fetch items" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("food-cart");
    const { name, price } = await request.json();

    if (!name || !price) {
      return NextResponse.json({ error: "Missing name or price" }, { status: 400 });
    }

    const result = await db.collection("items").insertOne({ name, price });

    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unable to add item" }, { status: 500 });
  }
}
