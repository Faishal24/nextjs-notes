import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";
import Tag from "@/libs/Tag";
import axios from "axios";
import { MdOutlineArchive } from "react-icons/md";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json()
  } catch (error) {
    console.log("Error loading note data: ", error);
  }
};

export default async function Notes() {
  const { notes } = await getNotes();

  const archiveNote = async (id) => {
    await axios.put(`http://localhost:3000/api/notes/${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7 text-primary">Welcome back, Atmin!</h1>
      <p className="text-xl font-semibold mb-4 text-primary">Here are your notes:</p>

      <ul className="flex flex-col gap-2">
        {notes.map((note) => (
          <li
            key={note._id}
            className="cursor-pointer w-full p-2 border border-gray-400 hover:bg-gray-100 rounded-md"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div
                  className={`rounded-md h-12 w-12 flex items-center justify-center border
                  ${
                    note.tag == "Personal"
                      ? `bg-sky-200 text-sky-800 border-sky-900`
                      : note.tag == "Work"
                      ? `bg-amber-200 text-amber-800 border-amber-900`
                      : note.tag == "Health"
                      ? `bg-emerald-200 text-emerald-800 border-emerald-900`
                      : `bg-violet-200 text-violet-800 border-violet-900`
                  } 
                  `}
                >
                  <HiOutlineDocumentText className="text-2xl" />
                </div>
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="font-semibold text-primary">{note.title}</h3>
                  <span className="text-gray-600">{note.content}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <MdOutlineArchive className="text-2xl text-blue-500" onClick={() => archiveNote(note._id)}/>
                <HiOutlineTrash className="text-2xl text-red-500" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};