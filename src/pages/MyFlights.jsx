import React, { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
export default function MyFlights() {
  const token = localStorage.getItem("hey-token");
  const [myflightsData, setMyFlightsData] = useState(undefined);
  const navigate = useNavigate();
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
      <div className="w-full h-[60px] bg-white flex items-center  justify-between px-4">
        <div onClick={() => navigate(-1)}>
          <ChevronLeftIcon className="size-8 font-bold" />
        </div>

        <p className=" text-center font-bold text-[17px]">My Flights</p>
        <div className="w-8"></div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {myflightsData ? (
          myflightsData.length === 0 ? (
            <p className="text-[#0078FF] text-center">no flights</p>
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
          <div className="mt-4">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
