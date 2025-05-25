import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-8"
            src="https://tse2.mm.bing.net/th?id=OIP.HOKdtkrkP_AS6iLwJW10BwHaDF&pid=Api&P=0&h=220"
            alt="uber logo"
          />
          <form
            id="captain-form"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium mb-2">
              What's our captain's name
            </h3>
            <div className="flex gap-4 mb-5">
              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                required
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-base font-medium mb-2">
              What's our captain's email
            </h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-base"
              required
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base"
              required
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base">
              Login
            </button>
            <p className="text-center">
              Already have a account ?{" "}
              <Link to="/captain-login" className="text-blue-500 mb-3">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[10px]">
            This site is proctected by reCAPTCHA and the{" "}
            <span className="underline">
              Google Privacy Policy and Terms of Service apply
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptainSignup;
