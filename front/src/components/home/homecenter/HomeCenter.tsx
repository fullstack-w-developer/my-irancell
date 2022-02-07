import React from "react";
import InfoUser from "./InfoUser";
import ServiceUseful from "./servicesuseful/ServiceUseful";
import SliderHomeCenter from "./sliderhomecenter/SliderHomeCenter";
import TabMenuCenter from "./TabMenuCenter";
import EvryThingPackage from "./everythingpackage/EvryThingPackage";

const HomeCenter = () => {
  return (
    <div>
      <InfoUser />
      <TabMenuCenter />
      <ServiceUseful />
      <SliderHomeCenter />
      <EvryThingPackage />
    </div>
  );
};

export default HomeCenter;
