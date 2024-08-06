import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import PopUp from "@/components/PopUp";
import { HiOutlineTrash } from "react-icons/hi";

const Tags = () => {
  const [notes, setNotes] = useState([]);
  const [popUpInfo, setPopUpInfo] = useState(null);
  const tag = ["Personal", "Work", "School", "Health", "Other"];

  useEffect(() => {
    getNotes();
  }, []);

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

  const deleteNote = async (id) => {
    await fetch(`/api/notes?id=${id}`, {
      method: "DELETE",
    });
    console.log(`/api/notes?${id}`);

    setPopUpInfo({ text: "Note deleted", type: "danger" });
    getNotes();
  };

  return (
    <div className="pb-1">
      <h1 className="text-3xl font-semibold mb-7 text-primary">Category</h1>

      {tag.map((tag) => (
        <>
          <p className="text-lg font-semibold sm:text-xl text-primary">{tag}</p>
          <ul className="flex flex-col gap-2 mt-1 mb-4">
            {notes
              .filter((note) => note.tag === tag)
              .map((note) => (
                <li
                  key={note._id}
                  className="cursor-pointer w-full px-3 py-2 md:px-2 border border-gray-400 hover:bg-gray-100 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center w-full">
                      <Logo tag={note.tag} />
                      <div className="flex flex-col items-start gap-0.5">
                        <h3 className="font-semibold text-primary">
                          {note.title}
                        </h3>
                        <span className="text-gray-600">{note.content}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-col border-l-2 pl-2 ml-2 md:ml-0 md:border-0 md:flex-row">
                      <HiOutlineTrash
                        className="text-2xl text-red-500 hover:scale-125 transition md:mr-1"
                        onClick={() => deleteNote(note._id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </>
      ))}
      {popUpInfo && (
        <PopUp
          text={popUpInfo.text}
          type={popUpInfo.type}
          setShowPopUp={setPopUpInfo}
        />
      )}
    </div>
  );
};

export default Tags;
