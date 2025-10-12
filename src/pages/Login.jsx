import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API } from "../utils/path";
import { getApiHeaders } from "../utils/helper";
import { useDispatch } from "react-redux";
import userSlice from "../redux/slices/userSlice";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    return fetch(API.login, {
      method: "Post",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: getApiHeaders(),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("error in login response");
        }
      })
      .then((data) => {
        localStorage.setItem("hey-token", data.token);
        fetch(API.me, {
          method: "Get",
          headers: getApiHeaders(),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              console.log("error in login me Api call response");
            }
          })
          .then((data) => {
            console.log(data);
            dispatch(userSlice.actions.handleSaveUser(data));
            navigate("/");
          })
          .catch((err) => console.log(err, "login/me/api"));
      })
      .catch((err) => console.log(err, "login/api"));
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 ">
          <Input placeholder={"Enter your email"} {...register("email")} />
          <p className="text-red-500">{errors.email?.message}</p>
          <Input
            placeholder={"Enter password"}
            {...register("password")}
            type={"password"}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <Button text={"Login"} disabled={isSubmitting} />

        <div className=" flex gap-2 justify-center mt-[10px] flex-wrap  ">
          <p>Don't have account?</p>
          <Link className="text-blue-600" to={"/register"}>
            Register new account
          </Link>
        </div>
      </form>
    </>
  );
}
