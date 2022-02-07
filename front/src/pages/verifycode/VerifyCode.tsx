import React from "react";
import VerifyCodeComponent from "../../components/verifycode/VerifyCodeComponent";
import "./verifycode.css";
import InputVerifyCode from "./../../components/verifycode/InputVerifyCode";
import ButtonVerifyCode from "../../components/verifycode/ButtonVerifyCode";
import {useNavigate} from "react-router-dom"

const VerifyCode = () => {
  const history = useNavigate()
  return (
    <div className="verifycode">
      <div className="bg-white rounded-md">
        <div>
          <VerifyCodeComponent />
          <InputVerifyCode />
          <ButtonVerifyCode onClick={()=>history("/my-irancell/home")}/>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
