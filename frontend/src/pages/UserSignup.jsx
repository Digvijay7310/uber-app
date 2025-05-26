import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContex";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      setUser(data.user);

      navigate("/home");
    }

    setEmail(" ");
    setPassword(" ");
    setFirstName(" ");
    setLastName(" ");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-8"
            src="https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png"
            alt="uber logo"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-5">
              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                required
                type="text"
                placeholder="first name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                placeholder="last name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's your email</h3>
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
              Sign up
            </button>
            <p className="text-center">
              Already have a account ?{" "}
              <Link to="/login" className="text-blue-500 mb-3">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="text-[8px]">
            By proceeding you consent to get calls, WhatsApp or SMS mesages,
            including by authomated means, from Uber and its affilate to the
            email provided.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
