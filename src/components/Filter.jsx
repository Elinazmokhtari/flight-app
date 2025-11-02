import React, { useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/20/solid";

export default function Filter() {
  const [filter, setFilter] = useState({
    from: "",
    to: "",
    from_time: "",
    to_time: "",
  });
  return (
    <div className="flex flex-col gap-2 mt-6 mb-6">
      <div className="h-[88px] flex justify-between  gap-1 *:p-2 relative  ">
        <div className="border border-[#DCDFE6] rounded-l-[10px] w-full">
          <select
            onChange={(e) => setFilter({ ...filter, from: e.target.value })}
          >
            <option value="Hanoi">Hanoi</option>
            <option value="Korea">Korea</option>
            <option value="USA">USA</option>
          </select>
          <p className="text-[13px] text-[#3C3C4399]">from</p>
          <p className="font-bold text-[17px]"> {filter.from}</p>
          <p className="font-bold text-[#3C3C4399] text-[13px]">Han</p>
        </div>
        <div className=" w-full flex justify-center absolute top-[20px]">
          <div className="size-8 bg-[#0078FF] flex justify-center items-center rounded-full">
            <ArrowsRightLeftIcon className="size-5 text-white" />
          </div>
        </div>
        <div className="border border-[#DCDFE6] rounded-r-[10px] w-full flex flex-col text-right ">
          <select
            onChange={(e) => setFilter({ ...filter, to: e.target.value })}
          >
            <option value="Singapore">Singapore</option>
            <option value="Tehran">Tehran</option>
            <option value="Toronto">Toronto</option>
          </select>
          <p className="text-[13px] text-[#3C3C4399]">to</p>
          <p className="font-bold text-[17px]">{filter.to}</p>
          <p className="font-bold text-[#3C3C4399] text-[13px]">Sin</p>
        </div>
      </div>
      <div className="h-[61px] flex justify-between border border-[#DCDFE6] rounded-[10px] overflow-hidden *:p-2 ">
        <div className="w-full flex flex-col bg-[#0078FF0F] ">
          <p>from</p>
          <input
            type="date"
            onChange={(e) =>
              setFilter({ ...filter, from_time: e.target.value })
            }
          ></input>
        </div>
        <div className="w-full flex flex-col ">
          <p>to</p>
          <input
            type="date"
            onChange={(e) => setFilter({ ...filter, to_time: e.target.value })}
          ></input>
        </div>
      </div>
      <p>from: {filter.from_time}</p>
      <p>to: {filter.to_time}</p>
    </div>
  );
}
