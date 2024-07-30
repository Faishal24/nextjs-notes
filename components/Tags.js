import React from "react";

const Tags = ({ text }) => {
  return (
    <span
      className={`text-sm py-1 px-2 rounded-lg border 
    ${
      text == "Personal"
        ? `bg-sky-200 text-sky-800 border-sky-900`
        : text == "Work"
        ? `bg-amber-200 text-amber-800 border-amber-900`
        : `bg-emerald-200 text-emerald-800 border-emerald-900`
    } 
    `}
    >
      {text}
    </span>
  );
};

export default Tags;
