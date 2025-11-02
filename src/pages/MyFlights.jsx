import React from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

export default function MyFlights() {
  return (
    <div className="">
      <div className="w-full h-[60px] bg-white flex items-center  justify-between">
        <Link to={"/"}>
          <ChevronLeftIcon className="size-5 font-bold" />
        </Link>
        <p className=" text-center font-bold text-[17px]">My Flights</p>
        <div></div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
}
