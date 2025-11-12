import React from "react";
import airplane_booking from "../assets/img/airplane_booking.png";
import airline from "../assets/img/airline.png";
import moment from "moment";

export default function BookingCard(props) {
  const durationSeconds = parseInt(props.flightData.duration_seconds);
  console.log(durationSeconds);
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);

  const duration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const departure = moment(props.flightData.departure_date).format(
    "MMM D, HH:mm"
  );

  const departureArrive = moment(props.flightData.departure_date)
    .add(durationSeconds, "seconds")
    .format("MMM D, HH:mm");

  const returnDate = moment(props.flightData.return_date).format(
    "MMM D, HH:mm"
  );

  const returnDateArrive = moment(props.flightData.return_date)
    .add(durationSeconds, "seconds")
    .format("MMM D, HH:mm");

  return (
    <div className="w-full bg-white rounded-[12px] p-3.5">
      <div className="w-full ">
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between flex-wrap">
            <div className="font-bold text-[22px]">
              <p>{props.flightData.from_city}</p>
            </div>

            <img src={airplane_booking} alt="" />

            <div className="font-bold text-[22px]">
              <p>{props.flightData.to_city}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[11px] text-[#3C3C434D]">
              {props.flightData.stops} stop
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-[12px] text-[#3C3C434D]">{departure}</p>
            <p className="text-[11px] text-[#3C3C434D]">{duration}</p>
            <p className="text-[12px] text-[#3C3C434D]">{departureArrive}</p>
          </div>
        </div>
        <div className="border-dashed border-[1px] border-[#EBEEF5] mt-2"></div>
        <div className=" flex justify-between items-center mt-2 flex-wrap">
          <div className="flex gap-2 items-center">
            <img src={airline} alt="" className="size-10"></img>
            <p className="text-[13px] font-medium text-[#999999]">
              {props.flightData.departure_airline}
            </p>
            <p className="text-[12px] text-[#3C3C434D]">AirBus 320</p>
          </div>
          <div className="text-[12px] text-[#3C3C434D]">
            {props.flightData.type}
          </div>
        </div>
      </div>
      <div className=" border-[1px] border-[#EBEEF5] mt-3  mb-1"></div>
      <div className="w-full ">
        <div className="flex flex-col w-full ">
          <div className="flex items-center justify-between flex-wrap">
            <div className="font-bold text-[22px]">
              <p>{props.flightData.to_city}</p>
            </div>

            <img src={airplane_booking} alt="" />

            <div className="font-bold text-[22px]">
              <p>{props.flightData.from_city}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[11px] text-[#3C3C434D]">
              {props.flightData.stops} stop
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[12px] text-[#3C3C434D]">{returnDate}</p>
            <p className="text-[11px] text-[#3C3C434D]">{duration}</p>
            <p className="text-[12px] text-[#3C3C434D]">{returnDateArrive}</p>
          </div>
        </div>
        <div className="border-dashed border-[1px] border-[#EBEEF5] mt-2"></div>
        <div className="flex justify-between items-center mt-2 flex-wrap">
          <div className=" flex gap-2 items-center">
            <img src={airline} alt="" className="size-10 "></img>
            <p className="text-[13px] font-medium text-[#999999]">
              {props.flightData.return_airline}
            </p>
            <p className="text-[12px] text-[#3C3C434D]">AirBus 320</p>
          </div>
          <div className="text-[12px] text-[#3C3C434D]">
            {props.flightData.type}
          </div>
        </div>
      </div>
    </div>
  );
}
