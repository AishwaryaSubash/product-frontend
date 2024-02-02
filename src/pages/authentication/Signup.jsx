import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Signup = ({ toggleSignup }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData
      );
      if (response.data.created) {
        toggleSignup();
        //   setMessage("User created succesfully!");
        // } else {
      }
      setMessage(response.data.message);
      console.log(response.data);
    } catch (error) {
      console.error("There was a problem with the request:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-fit flex flex-col justify-center items-center bg-slate-600 rounded-lg">
        <p className="text-2xl p-4">Sign Up</p>
        <div className="text-lg p-8">
          <form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="p-2 rounded-md"
                required
              />
            </div>
            <button
              onClick={submit}
              type="submit"
              className="w-fit py-2 px-4 m-4 bg-red-400 rounded-xl"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <p>{message}</p>
    </>
  );
};

Signup.propTypes = {
  toggleSignup: PropTypes.func.isRequired,
};

export default Signup;
