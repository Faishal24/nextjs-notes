"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineArchive } from "react-icons/md";
import PopUp from "./PopUp";
import Logo from "./Logo";

export default function Notes() {
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

  const archiveNote = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ archive: true }),
    });

    setPopUpInfo({ text: "Note archived", type: "success" });
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
    <div className="bg-white">
      <h1 className="text-3xl font-semibold mb-7 text-primary">
        Welcome back, Atmin!
      </h1>
      <p className="text-xl font-semibold mb-4 text-primary">
        Here are your notes:
      </p>
      <ul className="flex flex-col gap-2">
        {notes
          .filter((note) => !note.archive)
          .map((note) => (
            <li
              key={note._id}
              className="cursor-pointer w-full px-3 py-2 md:px-2 border border-gray-400 hover:bg-gray-100 rounded-md"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Logo tag={note.tag} />
                  <div className="flex flex-col items-start gap-0.5">
                    <h3 className="font-semibold text-primary">{note.title}</h3>
                    <span className="text-gray-600">{note.content}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-col border-l-2 pl-2 md:border-0 md:flex-row">
                  <MdOutlineArchive
                    className="text-2xl text-blue-500 hover:scale-125 transition"
                    onClick={() => archiveNote(note._id)}
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
