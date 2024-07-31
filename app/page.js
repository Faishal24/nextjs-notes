"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const Notes = dynamic(() => import("@/components/Notes"));
const NewNote = dynamic(() => import("@/components/NewNote"));
const Archives = dynamic(() => import("@/components/Archives"));
const Tags = dynamic(() => import("@/components/Tags"));
const Settings = dynamic(() => import("@/components/Settings"));

export default function Home() {
  const [screen, setActiveScreen] = React.useState("notes");

  const renderScreen = () => {
    switch (screen) {
      case "notes":
        return <Notes />;
      case "newNotes":
        return <NewNote />;
      case "archives":
        return <Archives />;
      case "tags":
        return <Tags />;
      case "settings":
        return <Settings />;
      default:
        return <Notes />;
    }
  };

  return (
    <main className="md:flex md:flex-row bg-white">
      <Sidebar setActiveScreen={setActiveScreen} screen={screen}/>

      <div className="px-3 md:p-5 w-screen h-screen bg-white">
        {renderScreen()}
      </div>
    </main>
  );
}
