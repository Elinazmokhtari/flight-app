import React from "react";
import Button from "./Button";
import airplane from "../assets/img/airplane.png";
import airline from "../assets/img/airline.png";
import moment from "moment";
import { Link } from "react-router";
import { toast } from "react-toastify";

export default function FlightCard(props) {
  const token = localStorage.getItem("hey-token");
  console.log(JSON.stringify(props));
  const durationSeconds = parseInt(props.data.duration_seconds);
  console.log(durationSeconds);
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);

  const duration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const departure = moment(props.data.departure_date).format("HH:mm");

  const departureArrive = moment(props.data.departure_date)
    .add(durationSeconds, "seconds")
    .format("HH:mm");

  const returnDate = moment(props.data.return_date).format("HH:mm");

  const returnDateArrive = moment(props.data.return_date)
    .add(durationSeconds, "seconds")
    .format("HH:mm");

  const timeLine = moment(props.data.return_date).diff(
    moment(props.data.departure_date),
    "day"
  );

  function handleDelete() {
    fetch("https://hey.mahdisharifi.dev/api/flights/cancel", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        flightId: props.data.id,
      }),
    })
      .then((res) => {
        if (res.ok) {
          props.onDelete(props.data.id);
          toast.error("Your flight has been canceled!", { theme: "colored" });
          return res.json();
        } else {
          console.log("err in ress flightcard ");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Link to={`/booking/${props.data.id}`}>
      <div className="p-4 bg-white w-full rounded-[12px]">
        <div className="w-full  gap-7 flex flex-col">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex gap-5">
              <img src={airline} alt="" className="size-10 bg-red-400"></img>
              <div>
                <div className=" flex justify-between gap-4 *:font-bold ">
                  <p>{departure}</p>
                  <img src={airplane} alt="" />
                  <p>{departureArrive}</p>
                </div>
                <div className="text-[#3C3C434D] text-[12px] ">
                  {props.data.departure_airline} - {props.data.return_airline}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#3C3C4399] font-medium text-[12px]">
                direct flight
              </p>
              <p className="text-[#3C3C434D] text-[12px]">{duration}</p>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex gap-5">
              <img src={airline} alt="" className="size-10 bg-red-400"></img>
              <div>
                <div className=" flex justify-between gap-4 *:font-bold ">
                  <p>{returnDate}</p>
                  <img src={airplane} alt="" />
                  <p>{returnDateArrive}</p>
                </div>
                <div className="text-[#3C3C434D] text-[12px] ">
                  {props.data.return_airline} - {props.data.departure_airline}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#3C3C4399] font-medium text-[12px]">
                direct flight
              </p>
              <p className="text-[#3C3C434D] text-[12px]">{duration}</p>
            </div>
          </div>
        </div>
        <div className="border-dashed border-[1px] border-[#EBEEF5] mt-2"></div>
        <div className="mt-2">
          {props.cancelButton ? (
            <Button
              text={"Cancel"}
              className={"bg-red-500"}
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
                e.stopPropagation();
              }}
            />
          ) : (
            <div className="flex justify-between">
              <p className="text-[#3C3C434D] text-[12px]">
                {timeLine} days in {props.data.to_city}
              </p>
              <p className="font-bold">${props.data.price}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
