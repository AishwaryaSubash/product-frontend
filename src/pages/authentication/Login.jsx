import { useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { SessionContext } from "../../App";

const Login = ({ handleLogin }) => {
  const { setSessionToken } = useContext(SessionContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
    }));
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signin",
        formData
      );
      if (response.data.verified) {
        setSessionToken(response.data.token);
        handleLogin(true);
      }
      setMessage(response.data.message);
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
      <div className="w-fit flex flex-col justify-center items-center bg-[#f7f2f5] rounded-lg drop-shadow-lg">
        <p className="text-2xl p-4">Login</p>
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
              <label>Password</label>
              <input
                type="password"
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
              className="w-fit py-2 px-4 m-4 bg-[#5D0560] text-white rounded-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <p>{message}</p>
    </>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
