import React from "react";
import { Outlet } from "react-router";
import air from "../../assets/img/air.png";

export default function AuthLayout() {
  return (
    <div className=" container h-screen m-auto  ">
      <div className=" h-[450px] relative overflow-hidden">
        <img className="w-full h-full object-cover" src={air} alt="" />
      </div>
      <div className="p-4 flex flex-col gap-4  ">
        <Outlet />
      </div>
    </div>
  );
}
