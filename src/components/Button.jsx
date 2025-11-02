import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className={`w-full flex justify-center items-center p-2 text-white font-medium bg-[#0078FF] rounded-xl disabled:opacity-30 ${props.className}`}
    >
      {props.text}
    </button>
  );
}
