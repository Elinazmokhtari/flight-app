import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate, useParams } from "react-router";
import BookingCard from "../components/BookingCard";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { getApiHeaders } from "../utils/helper";

const schema = yup
  .object({
    count: yup.string().max(10).required(),
    phone_number: yup.string().min(11).required(),
    email: yup.string().email().required(),
  })
  .required();

export default function Booking() {
  const [formData, setFormData] = useState({
    count: "",
    phone_number: "",
    email: "",
  });
  const [flightData, setFlightData] = useState(undefined);
  const param = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    fetch(`https://hey.mahdisharifi.dev/api/flights/${param.id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("err in ress, booking page");
        }
      })
      .then((data) => console.log(setFlightData(data)))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = () => {
    return fetch("https://hey.mahdisharifi.dev/api/flights/book", {
      method: "post",
      headers: getApiHeaders(),
      body: JSON.stringify({
        flightId: param.id,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("your flight booked");
        } else if (response.status == 409) {
          console.log("you already booked this flight");
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/myflight");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {flightData ? (
        <div className="h-[160px] bg-[#0078ff]">
          <div className="w-full h-[60px]   text-white flex items-center  justify-between">
            <Link to={"/"}>
              <ChevronLeftIcon className="size-5 font-bold" />
            </Link>
            <p className=" text-center font-bold text-[17px]">Booking</p>
            <div></div>
          </div>

          <div className="m-4  gap-4 ">
            <BookingCard flightData={flightData} />
          </div>

          <form
            id="booking-form"
            className="m-4 p-4 bg-white rounded-[12px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-[17px] font-bold ">Contact details</p>
            <div className=" border-[1px] border-[#EBEEF5] mt-3  mb-1"></div>
            <div className="flex flex-col  mt-3  mb-1 gap-4 *:gap-2">
              <div>
                <p>Passenger Count</p>
                <input
                  type="text"
                  placeholder="ex: 2"
                  className="w-full py-2 outline-hidden border-b-[1px] border-[#3C3C434D] "
                  onChange={(e) =>
                    setFormData({ ...formData, count: e.target.value })
                  }
                  {...register("count")}
                />
                {errors.count?.message ? (
                  <span className="text-red-500">{errors.count.message}</span>
                ) : null}
              </div>
              <div>
                <p>Phone number</p>
                <input
                  type="text"
                  placeholder="Enter Phone number"
                  className="w-full py-2 outline-hidden border-b-[1px] border-[#3C3C434D]"
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                  {...register("phone_number")}
                />

                {errors.phone_number?.message ? (
                  <span className="text-red-500">
                    {errors.phone_number.message}
                  </span>
                ) : null}
              </div>
              <div>
                <p>Email address</p>
                <input
                  type="text"
                  placeholder="Email to receive booking info"
                  className="w-full py-2 outline-hidden border-b-[1px] border-[#3C3C434D]"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  {...register("email")}
                />
                {errors.email?.message ? (
                  <span className="text-red-500">{errors.email.message}</span>
                ) : null}
              </div>
            </div>
          </form>

          <div className="mx-4 p-4 bg-white rounded-[12px]  gap-2">
            <p className="text-[17px] font-bold">Visa requirements</p>
            <div className=" border-[1px] border-[#EBEEF5] mt-2  mb-2"></div>
            <p className="text-[13px] text-[#3C3C4399] ">
              pA visa or airport transit visa may be necessary for travel.
              Requirements found here are for reference purposes only. Contact
              the embassy or your foreign ministry for more information.
              Kiwi.com is not liable for any passenger who is denied from
              boarding or from entering any destination due to visa issues.
            </p>
          </div>
          <div className="w-full h-[60px] bg-white  p-4 flex  justify-between items-center mt-5">
            <div>
              <p>${flightData.price}</p>
              <p>Adult count :{formData.count}</p>
            </div>
            <button
              className="px-6.5 py-2 bg-[#00e89d] rounded-4xl text-white"
              disabled={isSubmitting}
              type="submit"
              form="booking-form"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
