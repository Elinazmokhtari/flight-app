import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

export default function MyFlights() {
  const token = localStorage.getItem("hey-token");
  const [myflightsData, setMyFlightsData] = useState(undefined);
  useEffect(() => {
    fetch("https://hey.mahdisharifi.dev/api/my/flights", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("err in my flights api");
        }
      })
      .then((data) => {
        setMyFlightsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateList(id) {
    setMyFlightsData((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="">
      <div className="w-full h-[60px] bg-white flex items-center  justify-between">
        <Link to={"/booking"}>
          <ChevronLeftIcon className="size-5 font-bold" />
        </Link>
        <p className=" text-center font-bold text-[17px]">My Flights</p>
        <div></div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {myflightsData ? (
          myflightsData.length === 0 ? (
            <p>no flights</p>
          ) : (
            myflightsData.map((item, index) => {
              return (
                <FlightCard
                  cancelButton={true}
                  data={item}
                  key={index}
                  onDelete={(id) => handleUpdateList(id)}
                />
              );
            })
          )
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}
