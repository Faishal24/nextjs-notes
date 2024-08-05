import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const Tags = () => {
  const [notes, setNotes] = useState([]);
  const tag = ["Personal", "Work", "School", "Health", "Other"];

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

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7 text-primary">Category</h1>

      {tag.map((tag) => (
        <>
          <p className="text-xl text-primary">{tag}</p>
          <ul className="flex flex-col gap-2 mt-1 mb-4">
            {notes
              .filter((note) => note.tag === tag)
              .map((note) => (
                <li
                  key={note._id}
                  className="cursor-pointer w-full px-3 py-2 md:px-2 border border-gray-400 hover:bg-gray-100 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div
                      className="flex gap-3 items-center w-full"
                      onClick={() => moveEdit(note)}
                    >
                      <Logo tag={note.tag} />
                      <div className="flex flex-col items-start gap-0.5">
                        <h3 className="font-semibold text-primary">
                          {note.title}
                        </h3>
                        <span className="text-gray-600">{note.content}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Tags;
