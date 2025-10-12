import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API } from "../utils/path";

const schema = yup
  .object({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Password and confirmation must be the same"
      )
      .required(),
  })
  .required();

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    return fetch(API.register, {
      method: "post",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordConfirmation,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          navigate("/login");
          return res.json();
        } else {
          console.log("register respinse error");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Input placeholder={"Enter your name"} {...register("name")} />
          <p className="text-red-500">{errors.name?.message}</p>
          <Input placeholder={"Enter your email"} {...register("email")} />
          <p className="text-red-500">{errors.email?.message}</p>
          <Input
            placeholder={"Enter password"}
            {...register("password")}
            type={"password"}
          />
          <p className="text-red-500">{errors.password?.message}</p>
          <Input
            placeholder={"Enter password confirmation"}
            {...register("passwordConfirmation")}
            type={"password"}
          />
          <p className="text-red-500">{errors.passwordConfirmation?.message}</p>
        </div>
        <Button text={"Register"} disabled={isSubmitting} />
        <div className=" flex gap-2 justify-center mt-[10px] flex-wrap ">
          <p> Already have an account?</p>
          <Link className="text-blue-600" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </>
  );
}
