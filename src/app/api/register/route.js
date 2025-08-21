import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const client = await clientPromise;
    const db = client.db("food-cart");

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return new NextResponse("User created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
}
