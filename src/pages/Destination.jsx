import React from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";
import airplane_gray from "../assets/img/airplane_gray.png";
import location from "../assets/img/location.png";

export default function Destination() {
  return (
    <div>
      <div className="">
        <div className="w-full h-[60px] bg-white flex items-center  justify-between">
          <Link to={"/"}>
            <ChevronLeftIcon className="size-5 font-bold" />
          </Link>
          <p className=" text-center font-bold text-[17px]">
            Singapore - Hanoi
          </p>
          <div></div>
        </div>
        <div className="p-4  w-full bg-white rounded-b-4xl ">
          <div className="px-4 flex flex-col gap-12">
            <div className="size-4 flex gap-2 items-center">
              <img src={location} alt="" />
              <p>Singapore</p>
            </div>

            <div className="size-5 flex gap-2 items-center">
              <img src={airplane_gray} alt="" />
              <p>Hanoi</p>
            </div>
          </div>
          <div className="bg-[#F0F2F5] flex justify-between px-4 py-2 rounded-[12px] mt-4 mb-12 *:text-[#3C3C4399]">
            <p>Wed, Mar 20</p>
            <p>Mon, Mar 25</p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <FlightCard />
          <FlightCard />
        </div>
      </div>
    </div>
  );
}
