import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import HeroSection from "~/components/HeroSection";
// import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "AvensterUI" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen bg-black w-full">
      <Navbar/>
      <HeroSection/>
      
      
    </div>
  );
}
