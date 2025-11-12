import React, { useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/20/solid";
import calenadr from "../assets/img/calendar.png";
import moment from "moment";
import { useNavigate } from "react-router";
import Button from "./Button";

export default function Filter(props) {
  const [filter, setFilter] = useState({
    from_city: "",
    to_city: "",
    from_date: "",
    to_date: "",
  });

  const navigate = useNavigate();

  function handleCheckData() {
    if (
      filter.from_city &&
      filter.to_city &&
      filter.from_date &&
      filter.to_date
    ) {
      navigate(
        `/destination?from_city=${filter.from_city}&to_city=${filter.to_city}&from_date=${filter.from_date}&to_date=${filter.to_date}`
      );
    } else {
      console.log("complete fields");
    }
  }

  return (
    <div className="flex flex-col gap-2 mt-6 mb-6">
      <div className="h-[88px] flex justify-between  gap-1 *:p-2 relative  ">
        <div className="border border-[#DCDFE6] rounded-l-[10px] w-full relative ">
          <select
            onChange={(e) =>
              setFilter({ ...filter, from_city: e.target.value })
            }
            className="absolute top-0 left-0  w-full h-full opacity-0"
          >
            <option>select city</option>
            {props.cities
              ? props.cities.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    </>
                  );
                })
              : "choose city"}
          </select>
          <p className="text-[13px] text-[#3C3C4399]">from</p>

          <p className="font-bold text-[17px]"> {filter.from_city}</p>
          <p className="font-bold text-[#3C3C4399] text-[13px]">city</p>
        </div>
        <div className=" w-full flex justify-center absolute top-[20px] ">
          <div className="size-8 bg-[#0078FF] flex justify-center items-center rounded-full z-1">
            <ArrowsRightLeftIcon className="size-5 text-white" />
          </div>
        </div>
        <div className="border border-[#DCDFE6] rounded-r-[10px] w-full flex flex-col text-right  relative">
          <select
            onChange={(e) => setFilter({ ...filter, to_city: e.target.value })}
            className="absolute top-0 left-0 bg-amber-700 w-full h-full opacity-0"
          >
            <option>choose city</option>
            {props.cities
              ? props.cities.map((item, index) => {
                  return (
                    <>
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    </>
                  );
                })
              : "choose city"}
          </select>

          <p className="text-[13px] text-[#3C3C4399]">to</p>

          <p className="font-bold text-[17px]">{filter.to_city}</p>
          <p className="font-bold text-[#3C3C4399] text-[13px]">city</p>
        </div>
      </div>
      <div className="h-[61px] flex justify-between border border-[#DCDFE6] rounded-[10px] overflow-hidden *:p-2 ">
        <div className="w-full flex items-center gap-2 bg-[#0078FF0F] relative ">
          <img src={calenadr} alt="" className="size-8 " />
          <div>
            <p className="text-[#3C3C4399] text-[14px]">Depart</p>
            <div className="font-bold text-blue-500">
              {filter.from_date
                ? moment(filter.from_date).format("ddd, MMM DD")
                : "select time"}
            </div>
          </div>
          <input
            type="date"
            onChange={(e) =>
              setFilter({ ...filter, from_date: e.target.value })
            }
            className=" w-full h-full absolute top-0 left-0 opacity-0"
          ></input>
        </div>
        <div className="w-full flex flex-col relative">
          <p className="text-[#3C3C4399] text-[14px]">Return</p>
          <input
            type="date"
            onChange={(e) => setFilter({ ...filter, to_date: e.target.value })}
            className="w-full h-full absolute top-0 left-0  opacity-0 "
          ></input>
          <div className="font-bold text-blue-500">
            {filter.to_date
              ? moment(filter.to_date).format("ddd, MMM DD")
              : "select time"}
          </div>
        </div>
      </div>
      <Button text={"Search"} onClick={handleCheckData()} />
    </div>
  );
}
