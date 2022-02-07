import React from "react";
import "./login.css";
interface propsType {
  placeholder: string;
  type: string;
}
const InputLogin = ({ placeholder, type }: propsType) => {
  return (
    <div className="flex justify-center items-center mt-14">
      <div className="w-5/6 md:w-6/12">
        <input
          type={type}
          placeholder={placeholder}
          className="input-login placeholder:text-gray-400 border-b-2 border-gray-200"
        />
        <p className="text-gray-500 yekanmidum text-sm pt-4">
          شما میتوانید با شماره تلفن همراه یا TDLTE خود وارد شوید
        </p>
      </div>
    </div>
  );
};

export default InputLogin;
