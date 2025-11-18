import React from "react";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full h-full items-center  flex flex-row justify-between flex-wrap">
        <img className="w-[95px] h-[36px]" src={logo} alt="" />
        <Link to={"/myflight"}>
          <div className="size-10 flex justify-center items-center rounded-full overflow-hidden">
            <img src={user} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
