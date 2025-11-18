import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";
import airplane_gray from "../assets/img/airplane_gray.png";
import line from "../assets/img/line.png";
import location from "../assets/img/location.png";
import { useSearchParams } from "react-router";
import moment from "moment";
import Loading from "../components/Loading";

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
        <div className="w-full h-[60px] bg-white flex items-center  justify-between px-4">
          <Link to={"/"}>
            <ChevronLeftIcon className="size-8 font-bold" />
          </Link>
          <p className=" text-center font-bold text-[17px]">
            {searchParams.get("from_city")}-{searchParams.get("to_city")}
          </p>
          <div className="w-8"></div>
        </div>
        <div className="p-4  w-full bg-white rounded-b-4xl ">
          <div className="px-4 gap-2 flex flex-col">
            <div className=" flex gap-2 items-center">
              <img src={location} alt="" className="w-4" />
              <p>{searchParams.get("from_city")}</p>
            </div>
            <div className="">
              <img
                src={line}
                alt=""
                className="relative left-1.5 w-[2px] h-[32px]"
              />
            </div>
            <div className=" flex gap-2 items-center">
              <img src={airplane_gray} alt="" className="size-5" />
              <p>{searchParams.get("to_city")}</p>
            </div>
          </div>
          <div className="bg-[#F0F2F5] flex justify-between px-4 py-2 rounded-[12px] mt-4 mb-6 *:text-[#3C3C4399]">
            <p>{moment(searchParams.get("from_date")).format("ddd, MMM DD")}</p>
            <p>{moment(searchParams.get("to_date")).format("ddd, MMM DD")}</p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          {flightData ? (
            flightData.length === 0 ? (
              <p className="w-full text-center mt-4 text-[#0078FF]">
                No flights found
              </p>
            ) : (
              flightData.map((item, index) => {
                return <FlightCard key={index} data={item} />;
              })
            )
          ) : (
            <div className="mt-4">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
