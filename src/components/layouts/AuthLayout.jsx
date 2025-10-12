import React from "react";
import { Outlet, useLocation } from "react-router";
import air from "../../assets/img/air.png";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <div className=" container h-screen m-auto  ">
      <div className=" h-[450px] relative ">
        <img className="w-full h-full object-cover" src={air} alt="" />
        <div className="w-full relative bottom-[120px] text-4xl text-white font-bold text-center ">
          {" "}
          {location.pathname === "/register" ? "Register" : "Login"}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4  ">
        <Outlet />
      </div>
    </div>
  );
}
