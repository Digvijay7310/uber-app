import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";

function Start() {
  return (
    <div className="bg-cover bg-bottom  bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)]">
      <div className="h-screen pt-8  w-full  flex items-start justify-between flex-col">
        <img
          className="w-16 ml-8"
          src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png"
          alt="uber logo"
        />
        <div className="bg-white w-full py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black
            text-white py-3 rounded mt-4"
          >
            {" "}
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
