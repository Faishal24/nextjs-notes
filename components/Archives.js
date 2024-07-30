import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Archives = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-7">Archives</h1>

      <ul className="flex flex-col gap-5">
        <li className="cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="bg-gray-200 rounded-md h-12 w-12 flex items-center justify-center">
                <HiOutlineDocumentText className="text-2xl" />
              </div>
              <div>
                <h3>First Archive Note</h3>
                <p>1d ago</p>
              </div>
            </div>
            <HiOutlineDotsHorizontal className="text-2xl" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Archives;
