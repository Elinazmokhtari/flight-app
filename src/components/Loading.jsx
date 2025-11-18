import React from "react";
import logo from "../assets/img/logo.png";
export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center *:w-[95px]">
      <img src={logo} alt="" className="animate-bounce" />
    </div>
  );
}
