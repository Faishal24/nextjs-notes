"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const Notes = dynamic(() => import("@/components/Notes"));
const NewNote = dynamic(() => import("@/components/NewNote"));
const Archives = dynamic(() => import("@/components/Archives"));
const Tags = dynamic(() => import("@/components/Tags"));
const Settings = dynamic(() => import("@/components/Settings"));
const EditNote = dynamic(() => import("@/components/EditNote"));

export default function Home() {
  const [screen, setActiveScreen] = React.useState("notes");
  const [data, setData] = React.useState([]);

  const renderScreen = () => {
    switch (screen) {
      case "notes":
        return <Notes setActiveScreen={setActiveScreen} setData={setData} />;
      case "newNotes":
        return <NewNote />;
      case "archives":
        return <Archives />;
      case "tags":
        return <Tags />;
      case "settings":
        return <Settings />;
      case "editNote":
        return <EditNote data={data}/>;
      default:
        return <Notes />;
    }
  };

  return (
    <main className="md:flex md:flex-row bg-white">
      <Sidebar setActiveScreen={setActiveScreen} screen={screen} />

      <div className="px-3 pt-10 md:pl-[18.6rem] md:p-5 w-screen h-screen bg-white">
        {renderScreen()}
      </div>
    </main>
  );
}
