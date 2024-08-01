import React from "react";
import { MdCheckCircle, MdClose } from "react-icons/md";

const PopUp = ({ text, type, setShowPopUp }) => {
  return (
    <div
      className={`absolute flex justify-center text-white py-2 px-3 rounded-lg shadow-lg items-center gap-4 bottom-5 right-5 ${
        type == "success" ? "bg-emerald-500" : 
        type == "danger" ? "bg-red-500" : "bg-white"
      }`}
    >
      {/* <div className="flex gap-2"> */}
      {/* <MdCheckCircle className="text-green-500 text-xl" /> */}
      <p className="text-sm">{text}</p>
      {/* </div> */}
      <MdClose className="text-white text-xl cursor-pointer" onClick={() => setShowPopUp(false)}/>
    </div>
  );
};

export default PopUp;
