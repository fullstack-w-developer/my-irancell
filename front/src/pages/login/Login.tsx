import React from "react";
import ButtonLogin from "../../components/login/ButtonLogin";
import InputLogin from "../../components/login/InputLogin";
import LoginComponent from "../../components/login/LoginComponent";
import "./login.css";
import ItemFooter from "./../../components/login/ItemFooter";
import Cy from "./../../assests/image/cy.svg";
import ChangeLangage from "../../components/login/ChangeLangage";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const history = useNavigate()
  return (
    <div className="bg-gray-400 login">
      <div className="bg-white rounded-lg ">
        <div>
          <LoginComponent />
          <InputLogin type="tel" placeholder="شماره ایرانسلی" />
          <ButtonLogin onClick={()=>history("/my-irancell/verifycode")} />
          <ItemFooter
            text="شماره تلفن ثابت اینترنت خود را فراموش کرده ام"
            src={Cy}
            alt="cy"
            className="mt-10"
          />
          <ItemFooter
            text="خرید سیم کارت و مودم ایرانسلی"
            src={Cy}
            alt="cy"
            className="mt-4"
          />
          <ChangeLangage />
        </div>
      </div>
    </div>
  );
};

export default Login;
