import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Notes = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Welcome back, Atmin!</h1>
      <p className="text-xl font-semibold mb-4">Here are your notes:</p>

      <ul className="flex flex-col gap-5">
        <li className="cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="bg-gray-200 rounded-md h-12 w-12 flex items-center justify-center">
                <HiOutlineDocumentText className="text-2xl" />
              </div>
              <div>
                <h3>First Note</h3>
                <p>1d ago</p>
              </div>
            </div>
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div>
        </li>

        <li>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="bg-gray-200 rounded-md h-12 w-12 flex items-center justify-center">
                <HiOutlineDocumentText className="text-2xl" />
              </div>
              <div>
                <h3>Second</h3>
                <p>2d ago</p>
              </div>
            </div>
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Notes;
