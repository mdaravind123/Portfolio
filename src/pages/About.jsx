import React from "react";
import Header from "../components/header";

export default function About() {
  return (
    <div className="2xl:container mx-auto h-screen bg-green-50">
      <div className="w-[98%] mx-auto grid grid-cols-1">
        <div>
          <Header />
        </div>
        <main>
          <div className="2xl:container mx-auto h-screen">
            <div className="w-[98%] mx-auto h-screen grid grid-col">
              <div></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
