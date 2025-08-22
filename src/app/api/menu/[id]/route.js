import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");
    const menu = await menuCollection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json(menu);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to fetch menu" },
      { status: 500 }
    );
  }
}
// delete a dish with id
export async function DELETE(request, { params }) {
  const { id } = await params;
  try {
    const client = await clientPromise;
    const db = client.db("foodCartUser");
    const menuCollection = db.collection("allMenu");
    const result = await menuCollection.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Unable to delete dish" },
      { status: 500 }
    );
  }
}
