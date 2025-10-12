import React from "react";

export default function Button(props) {
  return (
    <button
      {...props}
      className="w-full flex justify-center items-center p-2 text-white font-medium bg-blue-600 rounded-xl disabled:opacity-30"
    >
      {props.text}
    </button>
  );
}
