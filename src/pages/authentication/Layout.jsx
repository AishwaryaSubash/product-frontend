import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import PropTypes from "prop-types";

const Layout = ({ handleLogin }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="mt-[90px]">
      {isSignup ? (
        <>
          <Signup toggleSignup={toggleSignup} />
          <div className="flex my-2 gap-2">
            <p>Already have an account?</p>
            <p
              className="underline text-violet-800 cursor-pointer"
              onClick={toggleSignup}
            >
              Sign In
            </p>
          </div>
        </>
      ) : (
        <>
          <Login handleLogin={handleLogin} />
          <div className="flex my-2 gap-2">
            <p>Don&apos;t have an account?</p>
            <p
              className="underline text-violet-800 cursor-pointer"
              onClick={toggleSignup}
            >
              Sign Up
            </p>
          </div>
        </>
      )}
    </div>
  );
};

Layout.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Layout;
