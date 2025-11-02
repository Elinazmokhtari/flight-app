import React from "react";
import DestinationCard from "./DestinationCard";

export default function Cities() {
  return (
    <div className="mt-6 ">
      <p className="font-bold text-[20px] leading-6 mb-3">Destination</p>
      <div className="w-full overflow-auto flex gap-2 absolute ">
        <DestinationCard citytext="New York" coast="from $1,058" />
        <DestinationCard citytext="Tokyo" coast="from $944" />
        <DestinationCard citytext="London" coast="from $685" />
        <DestinationCard citytext="London" coast="from $685" />
      </div>
    </div>
  );
}
