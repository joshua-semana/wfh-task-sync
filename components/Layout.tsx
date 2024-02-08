import React from "react";
import Login from "@/components/Login";
import Registration from "./Registration";

const Layout = () => {
  return (
    <div className="h-screen flex justify-center mx-auto max-w-7xl bg-slate-500 ">
      <div className="flex grow justify-center items-center">
        <div className="hidden sm:block">
          <Registration></Registration>
        </div>
      </div>
      <div className="flex grow justify-center items-center">
        <div className="justify-center sm:block">
          <Login></Login>
        </div>
      </div>
    </div>
  );
};

export default Layout;
