import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AuthLayout from "./components/layouts/AuthLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "./redux/slices/userSlice";
import { API } from "./utils/path";
import { getApiHeaders } from "./utils/helper";
import MainLayout from "./components/layouts/MainLayout";
import { Navigate } from "react-router";
import MyFlights from "./pages/MyFlights";
import Destination from "./pages/Destination";
import Booking from "./pages/Booking";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    const token = localStorage.getItem("hey-token");
    if (token) {
      fetch(API.me, {
        headers: getApiHeaders(),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            dispatch(userSlice.actions.handleSaveUser(null));
          }
        })
        .then((data) => {
          dispatch(userSlice.actions.handleSaveUser(data));
        })
        .catch((err) => console.log(err));
    } else {
      dispatch(userSlice.actions.handleSaveUser(null));
    }
  }, []);

  if (user === undefined) {
    return (
      <div className="w-screen h-screen">
        <Loading />
      </div>
    );
  }

  if (user === null) {
    return (
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="*" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    );
  }

  if (user) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to={"/"} />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/myflight" element={<MyFlights />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
