import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import InputFields from "./InputFields";

const InputVerifyCode = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="flex  justify-center items-center">
        <p className="yekanBold text-md ml-2"> ۹۰۵۲۵۴۹۴۵۰ ۹۸+</p>
        <BsArrowLeft />
      </div>

      <InputFields />
    </div>
  );
};

export default InputVerifyCode;
