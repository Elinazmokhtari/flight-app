import React from "react";
import DestinationCard from "./DestinationCard";

export default function Cities(props) {
  return (
    <div className="mt-6 ">
      <p className="font-bold text-[20px] leading-6 mb-3">Destination</p>
      <div className="w-full overflow-auto flex gap-2 ">
        {props.cities
          ? props.cities.map((item, index) => {
              return <DestinationCard key={index} city={item} />;
            })
          : "loading"}
      </div>
    </div>
  );
}
