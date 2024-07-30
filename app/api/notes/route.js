import connectMongoDB from "@/libs/mongodb";
import NoteModel from "@/models/NoteModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, tag, content } = await request.json();
  await connectMongoDB();

  await NoteModel.create({ title, tag, content });
  return NextResponse.json(
    { message: "Note created successfully" },
    { status: 201 }
  );
}
