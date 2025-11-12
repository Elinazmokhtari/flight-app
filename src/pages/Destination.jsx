import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";
import airplane_gray from "../assets/img/airplane_gray.png";
import location from "../assets/img/location.png";
import { useSearchParams } from "react-router";
import moment from "moment";

export default function Destination() {
  const [searchParams] = useSearchParams();

  const [flightData, setFlightData] = useState(undefined);

  useEffect(() => {
    fetch(
      `https://hey.mahdisharifi.dev/api/flights?from_city=${searchParams.get(
        "from_city"
      )}&to_city=${searchParams.get("to_city")}&from_date=${searchParams.get(
        "from_date"
      )}&to_date=${searchParams.get("to_date")}`,
      {
        method: "get",
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res err");
        }
      })
      .then((data) => setFlightData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="">
        <div className="w-full h-[60px] bg-white flex items-center  justify-between">
          <Link to={"/"}>
            <ChevronLeftIcon className="size-5 font-bold" />
          </Link>
          <p className=" text-center font-bold text-[17px]">
            {searchParams.get("from_city")}-{searchParams.get("to_city")}
          </p>
          <div></div>
        </div>
        <div className="p-4  w-full bg-white rounded-b-4xl ">
          <div className="px-4 flex flex-col gap-12">
            <div className="size-4 flex gap-2 items-center">
              <img src={location} alt="" />
              <p>{searchParams.get("from_city")}</p>
            </div>

            <div className="size-5 flex gap-2 items-center">
              <img src={airplane_gray} alt="" />
              <p>{searchParams.get("to_city")}</p>
            </div>
          </div>
          <div className="bg-[#F0F2F5] flex justify-between px-4 py-2 rounded-[12px] mt-4 mb-6 *:text-[#3C3C4399]">
            <p>{moment(searchParams.get("from_date")).format("ddd, MMM DD")}</p>
            <p>{moment(searchParams.get("to_date")).format("ddd, MMM DD")}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {flightData
            ? flightData.map((item, index) => {
                return <FlightCard key={index} data={item} />;
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
}
