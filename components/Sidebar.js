"use client";

import React, { useState } from "react";
import {
  MdOutlineStickyNote2,
  MdNotes,
  MdOutlineArchive,
  MdOutlineSettings,
  MdOutlineTag,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Sidebar = ({ setActiveScreen, screen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsAnimating(false);
    }, 200); // duration of the animation
  };

  return (
    <nav className="">
      <div className="flex md:hidden h-10 w-screen items-center justify-end px-5">
        {isOpen ? (
          <MdClose
            className={`text-3xl ${
              isAnimating ? "animate-rotateOut" : "animate-rotateIn"
            }`}
            onClick={toggle}
          />
        ) : (
          <MdMenu
            className={`text-3xl ${
              isAnimating ? "animate-rotateOut" : "animate-rotateIn"
            }`}
            onClick={toggle}
          />
        )}
      </div>

      <div className={`${isOpen && "border-b mb-2"} rounded-b-lg md:hidden`}>
        {isOpen && (
          <ul className="px-2">
            <li
              className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
                screen == "newNotes" ? "bg-gray-200" : ""
              }`}
            >
              <a
                href="#"
                className="flex gap-2 items-center p-2"
                onClick={() => setActiveScreen("newNotes")}
              >
                <MdOutlineStickyNote2 className="text-xl" />
                <span>New Note</span>
              </a>
            </li>
            <li
              className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
                screen == "notes" ? "bg-gray-200" : ""
              }`}
            >
              <a
                href="#"
                className="flex gap-2 items-center p-2"
                onClick={() => setActiveScreen("notes")}
              >
                <MdNotes className="text-xl" />
                <span>Notes</span>
              </a>
            </li>
            <li
              className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
                screen == "archives" ? "bg-gray-200" : ""
              }`}
            >
              <a
                href="#"
                className="flex gap-2 items-center p-2"
                onClick={() => setActiveScreen("archives")}
              >
                <MdOutlineArchive className="text-xl" />
                <span>Archives</span>
              </a>
            </li>
            <li
              className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
                screen == "tags" ? "bg-gray-200" : ""
              }`}
            >
              <a
                href="#"
                className="flex gap-2 items-center p-2"
                onClick={() => setActiveScreen("tags")}
              >
                <MdOutlineTag className="text-xl" />
                <span>Tags</span>
              </a>
            </li>
            <li
              className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
                screen == "settings" ? "bg-gray-200" : ""
              }`}
            >
              <a
                href="#"
                className="flex gap-2 items-center p-2"
                onClick={() => setActiveScreen("settings")}
              >
                <MdOutlineSettings className="text-xl" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        )}
      </div>

      <div className="hidden md:flex md:flex-col md:justify-between md:h-screen md:p-3 md:bg-gray-50 md:shadow md:w-72 md:z-50">
        <ul className="space-y-2">
          <li
            className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
              screen == "newNotes" ? "bg-gray-200" : ""
            }`}
          >
            <a
              href="#"
              className="flex gap-2 items-center p-2"
              onClick={() => setActiveScreen("newNotes")}
            >
              <MdOutlineStickyNote2 className="text-xl" />
              <span>New Note</span>
            </a>
          </li>
          <li
            className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
              screen == "notes" ? "bg-gray-200" : ""
            }`}
          >
            <a
              href="#"
              className="flex gap-2 items-center p-2"
              onClick={() => setActiveScreen("notes")}
            >
              <MdNotes className="text-xl" />
              <span>Notes</span>
            </a>
          </li>
          <li
            className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
              screen == "archives" ? "bg-gray-200" : ""
            }`}
          >
            <a
              href="#"
              className="flex gap-2 items-center p-2"
              onClick={() => setActiveScreen("archives")}
            >
              <MdOutlineArchive className="text-xl" />
              <span>Archives</span>
            </a>
          </li>
          <li
            className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
              screen == "tags" ? "bg-gray-200" : ""
            }`}
          >
            <a
              href="#"
              className="flex gap-2 items-center p-2"
              onClick={() => setActiveScreen("tags")}
            >
              <MdOutlineTag className="text-xl" />
              <span>Tags</span>
            </a>
          </li>
          <li
            className={`rounded-md hover:bg-gray-200 transition duration-200 text-gray-800 ${
              screen == "settings" ? "bg-gray-200" : ""
            }`}
          >
            <a
              href="#"
              className="flex gap-2 items-center p-2"
              onClick={() => setActiveScreen("settings")}
            >
              <MdOutlineSettings className="text-xl" />
              <span>Settings</span>
            </a>
          </li>
        </ul>

        <div>
          <ul>
            <li className="rounded-md p-2 text-md text-gray-800">
              <a href="#">
                <p className="group relative w-max">
                  <span>Personal</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gray-800 group-hover:w-full"></span>
                </p>
              </a>
            </li>
            <li className="rounded-md hover:text-gray-600 p-2 transition duration-200 text-md text-gray-800">
              <a href="#">
                <p className="group relative w-max">
                  <span>Work</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gray-800 group-hover:w-full"></span>
                </p>
              </a>
            </li>
            <li className="rounded-md hover:text-gray-600 p-2 transition duration-200 text-md text-gray-800">
              <a href="#">
                <p className="group relative w-max">
                  <span>School</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gray-800 group-hover:w-full"></span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
