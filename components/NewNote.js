import React from "react";

const NewNote = () => {
  const [title, setTitle] = React.useState("");
  const [tag, setTag] = React.useState("Personal");
  const [content, setContent] = React.useState("");

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
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
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
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-40 p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
      </form>
          <button className="w-full bg-sky-500 text-white px-5 py-3 rounded-md" onClick={() => console.log(title, tag, content)}>
            Create Note
          </button>
    </div>
  );
};

export default NewNote;
