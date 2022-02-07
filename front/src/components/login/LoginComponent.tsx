import React from "react";
import ImageLogo from "./../../assests/image/logo-main.svg";
import ImageBg from "./../../assests/image/login-bg.svg";

const LoginComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <img src={ImageLogo} alt="logo" />
      </div>
      <div className="flex justify-center items-center pt-5">
        <img src={ImageBg} alt="logo-bg" />
      </div>
      <p className="text-center text-gray-700 text-md yekanBold pt-8">
        ورود به ایرانسل من
      </p>
    </>
  );
};

export default LoginComponent;
