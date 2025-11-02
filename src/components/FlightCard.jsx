import React from "react";
import Button from "./Button";
import airplane from "../assets/img/airplane.png";
import airline from "../assets/img/airline.png";

export default function FlightCard() {
  return (
    <div className="p-4 bg-white w-full rounded-[12px]">
      <div className="w-full  gap-7 flex flex-col">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-5">
            <img src={airline} alt="" className="size-10 bg-red-400"></img>
            <div>
              <div className=" flex justify-between gap-4 *:font-bold ">
                <p>9:35</p>
                <img src={airplane} alt="" />
                <p>13:35</p>
              </div>
              <div className="text-[#3C3C434D] text-[12px] ">
                SIN - HAN, Vietjet Air
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#3C3C4399] font-medium text-[12px]">
              direct flight
            </p>
            <p className="text-[#3C3C434D] text-[12px]">3h 20min</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex gap-5">
            <img src={airline} alt="" className="size-10 bg-red-400"></img>
            <div>
              <div className=" flex justify-between gap-4 *:font-bold ">
                <p>9:35</p>
                <img src={airplane} alt="" />
                <p>13:35</p>
              </div>
              <div className="text-[#3C3C434D] text-[12px] ">
                HAN - SIN, Vietjet Air
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#3C3C4399] font-medium text-[12px]">
              direct flight
            </p>
            <p className="text-[#3C3C434D] text-[12px]">3h 20min</p>
          </div>
        </div>
      </div>
      <div className="border-dashed border-[1px] border-[#EBEEF5] mt-2"></div>
      <div className="mt-2">
        <Button text={"Cancel"} className={"bg-red-500"} />
      </div>
    </div>
  );
}
