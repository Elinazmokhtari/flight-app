import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Cities from "../components/Cities";
import Loading from "../components/Loading";

export default function Home() {
  const token = localStorage.getItem("hey-token");
  const [citiesData, setCitiesData] = useState(undefined);
  useEffect(() => {
    fetch("https://hey.mahdisharifi.dev/api/cities", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error in response");
        }
      })
      .then((data) => setCitiesData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4 container">
      <Header />
      {citiesData ? (
        <>
          <Filter cities={citiesData} />
          <Cities cities={citiesData} />
        </>
      ) : (
        <div className="mt-[100px]">
          <Loading />
        </div>
      )}
    </div>
  );
}
