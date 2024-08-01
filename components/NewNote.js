'use client'

import PopUp from "@/components/PopUp";
import React, {useState, useEffect} from "react";

const NewNote = () => {

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Personal");
  const [content, setContent] = useState("");

  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = async () => {
    if (!title || !tag || !content) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify({ title, tag, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setShowPopUp(true);
        console.log("Note created successfully");
      }
    } catch (error) {
      console.error("Error creating note: ", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7 text-primary">Create a new note</h1>
        <div className="sm:flex gap-5">
          <div className="s:w-1/3">
            <div className="mb-7">
              <label
                htmlFor="title"
                className="text-lg font-semibold block mb-2 text-primary"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-primary bg-white"
              />
            </div>
            <div>
              <label htmlFor="tag" className="text-lg font-semibold block mb-2">
                Tag
              </label>
              <select
                id="tag"
                onChange={(e) => setTag(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option>Personal</option>
                <option>Work</option>
                <option>School</option>
                <option>Health</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="pt-[1.25rem] sm:pt-0 sm:w-2/3">
            <div className="mb-5">
              <label
                htmlFor="content"
                className="text-lg font-semibold block mb-2"
              >
                Content
              </label>
              <textarea
                id="content"
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-40 p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-sky-900 text-gray-200 font-semibold px-5 py-3 rounded-md hover:bg-sky-800 hover:text-sky-200"
          onClick={() => handleSubmit()}
        >
          Create Note
        </button>
        {showPopUp && <PopUp text="Note created successfully" type="success" setShowPopUp={setShowPopUp}/>}
    </div>
  );
};

export default NewNote;
