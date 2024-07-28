import React from "react";
import {
  MdOutlineStickyNote2,
  MdNotes,
  MdOutlineArchive,
  MdOutlineSettings,
  MdOutlineTag
} from "react-icons/md";

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between h-screen p-3 bg-gray-50 shadow w-72">
      <ul className="space-y-2">
        <li className="rounded-md hover:bg-gray-200 transition duration-200 text-gray-800">
          <a href="#" className="flex gap-2 items-center p-2">
            <MdOutlineStickyNote2 className="text-xl" />
            <span>New Note</span>
          </a>
        </li>
        <li className="rounded-md hover:bg-gray-200 transition duration-200 text-gray-800">
          <a href="#" className="flex gap-2 items-center p-2">
            <MdNotes className="text-xl" />
            <span>Notes</span>
          </a>
        </li>
        <li className="rounded-md hover:bg-gray-200 transition duration-200 text-gray-800">
          <a href="#" className="flex gap-2 items-center p-2">
            <MdOutlineArchive className="text-xl" />
            <span>Archives</span>
          </a>
        </li>
        <li className="rounded-md hover:bg-gray-200 transition duration-200 text-gray-800">
          <a href="#" className="flex gap-2 items-center p-2">
            <MdOutlineTag className="text-xl" />
            <span>Tags</span>
          </a>
        </li>
        <li className="rounded-md hover:bg-gray-200 transition duration-200 text-gray-800">
          <a href="#" className="flex gap-2 items-center p-2">
            <MdOutlineSettings className="text-xl" />
            <span>Settings</span>
          </a>
        </li>
      </ul>

      <div>
        <ul>
          <li className="rounded-md hover:text-gray-600 p-2 transition duration-200 text-sm text-gray-800">
            <a href="#" className="">
              Personal
            </a>
          </li>
          <li className="rounded-md hover:text-gray-600 p-2 transition duration-200 text-sm text-gray-800">
            <a href="#">Work</a>
          </li>
          <li className="rounded-md hover:text-gray-600 p-2 transition duration-200 text-sm text-gray-800">
            <a href="#">School</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
