"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineUnarchive } from "react-icons/md";
import PopUp from "./PopUp";
import Logo from "./Logo";

export default function Archives() {
  const [notes, setNotes] = useState([]);
  const [popUpInfo, setPopUpInfo] = useState(null);

  const getNotes = async () => {
    try {
      const res = await fetch("/api/notes", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch notes");
      }

      const data = await res.json();
      setNotes(data.notes);
    } catch (error) {
      console.log("Error loading note data: ", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const unArchiveNote = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ archive: false }),
    });

    setPopUpInfo({ text: "Note unarchived", type: "success" });
    getNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`/api/notes?id=${id}`, {
      method: "DELETE",
    });
    console.log(`/api/notes?${id}`);

    setPopUpInfo({ text: "Note deleted", type: "danger" });
    getNotes();
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Archives</h1>

      <ul className="flex flex-col gap-2">
        {notes
          .filter((note) => note.archive)
          .map((note) => (
            <li
              key={note._id}
              className="cursor-pointer w-full p-2 border border-gray-400 hover:bg-gray-100 rounded-md"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                <Logo tag={note.tag} />
                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="font-semibold text-primary">{note.title}</h3>
                    <span className="text-gray-600">{note.content}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <MdOutlineUnarchive
                    className="text-2xl text-blue-500 hover:scale-125 transition"
                    onClick={() => unArchiveNote(note._id)}
                  />
                  <HiOutlineTrash
                    className="text-2xl text-red-500 hover:scale-125 transition"
                    onClick={() => deleteNote(note._id)}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
      {popUpInfo && (
        <PopUp
          text={popUpInfo.text}
          type={popUpInfo.type}
          setShowPopUp={setPopUpInfo}
        />
      )}
    </div>
  );
}
