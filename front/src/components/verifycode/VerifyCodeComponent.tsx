import React from "react";
import Logo_md from "./../../assests/image/logo-md-fa.png";
const VerifyCodeComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-4">
        <img src={Logo_md} alt="Logo_md" className="w-20 h-20" />
        <p className="yekanBold text-gray-400 pt-2 text-md">
          ورود به ایرانسل من
        </p>
      </div>
      <div className="mt-8">
        <p className="yekanBold text-md text-gray-600 text-center">لطفا رمز یک‌بار مصرف ارسال شده را وارد نمایید</p>
      </div>
    </>
  );
};

export default VerifyCodeComponent;
