import React from "react";
import HomeLeft from "../../components/home/homeleft/HomeLeft";
import HomeRight from "../../components/home/homeright/HomeRight";
import "./home.css";
import HomeCenter from './../../components/home/homecenter/HomeCenter';
const Home = () => {
  return (
    <div className="container_home">
      <div className="bg-white ">
        <HomeRight />
      </div>
      <div className="my-8 pl-2">
        <HomeCenter />
      </div>
      <div className="bg-white shadow-md rounded-lg my-8">
        <HomeLeft />
      </div>
    </div>
  );
};

export default Home;
