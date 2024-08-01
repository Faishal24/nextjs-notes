import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Logo = ({ tag }) => {
  return (
    <div
      className={`hidden sm:flex rounded-md h-12 w-12 items-center justify-center border
        ${
          tag == "Personal"
            ? `bg-sky-200 text-sky-800 border-sky-900`
            : tag == "Work"
            ? `bg-amber-200 text-amber-800 border-amber-900`
            : tag == "Health"
            ? `bg-emerald-200 text-emerald-800 border-emerald-900`
            : `bg-violet-200 text-violet-800 border-violet-900`
        } 
        `}
    >
      <HiOutlineDocumentText className="text-2xl" />
    </div>
  );
};

export default Logo;
