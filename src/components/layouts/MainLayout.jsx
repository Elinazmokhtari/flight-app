import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className=" container  m-auto bg-[#F5F7FA] ">
      <Outlet />
    </div>
  );
}
