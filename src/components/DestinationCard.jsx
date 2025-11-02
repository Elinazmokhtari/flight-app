import React from "react";

export default function DestinationCard(props) {
  return (
    <>
      <div className="w-[140px] flex flex-col shadow rounded-[10px] overflow-hidden shrink-0">
        <div className="h-[194px] w-full bg-amber-400">img</div>
        <div className="p-2">
          <p className="text-[15px] font-bold ">{props.citytext}</p>
          <p className="text-[11px] text-[#3C3C4399]">{props.coast}</p>
        </div>
      </div>
    </>
  );
}
