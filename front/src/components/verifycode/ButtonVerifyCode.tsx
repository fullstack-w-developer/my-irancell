import React from "react";
import CountDown from "./CountDown";
interface propsType {
  onClick: () => any;
}
const ButtonVerifyCode = ({ onClick }: propsType) => {
  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <button
        onClick={onClick}
        className="bg-yellow-400 text-gray-500 yekanBold text-lg px-20 py-3 rounded-md"
      >
        ادامه
      </button>
      <CountDown />
      <p className="text-blue-400 bg-blue-50 yekanBold text-sm text-center mt-3 cursor-pointer ">
        ورود با رمز عبور
      </p>
    </div>
  );
};

export default ButtonVerifyCode;
