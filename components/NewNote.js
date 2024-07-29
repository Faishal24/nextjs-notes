import React from "react";

const NewNote = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Create a new note</h1>
      <form className="flex gap-5">
        <div className="w-1/3">
          <div className="mb-7">
            <label htmlFor="title" className="text-lg font-semibold block mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="tag" className="text-lg font-semibold block mb-2">
              Tag
            </label>
            <select
              id="tag"
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option>Personal</option>
              <option>Work</option>
              <option>School</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="w-2/3">
          <div className="mb-5">
            <label
              htmlFor="content"
              className="text-lg font-semibold block mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              className="w-full min-h-40 p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button className="w-full bg-sky-500 text-white px-5 py-3 rounded-md">
            Create Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
