import connectMongoDB from "@/libs/mongodb";
import NoteModel from "@/models/NoteModel";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newTitle: title, newTag: tag, newContent: content} = await request.json();
    await connectMongoDB();

    await NoteModel.findByIdAndUpdate(id, {title, tag, content});
    return NextResponse.json({message: "Note updated successfully"});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();

    const note = await NoteModel.findOne({_id: id});
    return NextResponse.json({note});
}