import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching notes: ", error);
  }
};

const Notes = async () => {
  const { notes } = await getNotes();
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Welcome back, Atmin!</h1>
      <p className="text-xl font-semibold mb-4">Here are your notes:</p>

      <ul className="flex flex-col gap-5">
        {notes.map((note) => (
          <li className="cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="bg-gray-200 rounded-md h-12 w-12 flex items-center justify-center">
                  <HiOutlineDocumentText className="text-2xl" />
                </div>
                <div>
                  <h3>{note.title}</h3>
                  <p>{note.tag}</p>
                </div>
              </div>
              <HiOutlineDotsHorizontal className="text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
