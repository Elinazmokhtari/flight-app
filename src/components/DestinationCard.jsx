import React from "react";

export default function DestinationCard(props) {
  return (
    <div className="w-[140px] flex flex-col shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden shrink-0 bg-white">
      <img src={props.city.image} alt="" className="h-[194px] object-cover" />

      <div className="p-2">
        <p className="text-[15px] font-bold ">{props.city.name}</p>
        <p className="text-[11px] text-[#3C3C4399]">{props.city.description}</p>
      </div>
    </div>
  );
}
