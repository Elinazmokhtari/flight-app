import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Button from "../components/Button";
import Cities from "../components/Cities";

export default function Home() {
  return (
    <div className="p-4 container">
      <Header />
      <Filter />
      <Button text={"Search"} />
      <Cities />
    </div>
  );
}
