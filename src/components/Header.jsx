import React from "react";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.png";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full h-full items-center  flex flex-row justify-between flex-wrap">
        <img className="w-[95px] h-[36px]" src={logo} alt="" />
        <div className="bg-amber-200 size-10 flex justify-center items-center rounded-full overflow-hidden ">
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}
