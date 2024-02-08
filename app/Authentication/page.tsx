"use client";
import Login from "@/components/Login";
import Layout from "@/components/Layout";
import Registration from "@/components/Registration";
import React, { useState } from "react";

const App: React.FC = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const toggleDivs = () => {
    setShowFirstDiv(!showFirstDiv);
  };

  return (
    <div className="flex h-screen flex-col-reverse max-w-7xl mx-auto sm:flex-row">
      <div className=" flex flex-1   justify-center items-center">Carousel</div>
      <button onClick={toggleDivs}>Toggle Divs</button>
      <div className="flex flex-1 justify-center items-center">
        {showFirstDiv ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <Registration />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
