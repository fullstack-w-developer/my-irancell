import React from "react";
import ItemPackage from "./ItemPackage";
import { BsGlobe } from "react-icons/bs";
const EvryThingPackage = () => {
  return (
    <div className="bg-white py-6 rounded-sm shadow-md mt-4">
      <p className="text-md pr-4 yekanBold text-gray-700 border-b border-solid border-gray-400 pb-4">
        همه‌ی بسته‌ها
      </p>
      <div className="flex items-center flex-wrap pt-3">
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="اینترنت اظطراری"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="مکالمه اظطراری"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="اینترنت "
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="مکالمه "
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="چند کاربره"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="رومینگ"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="بوم"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="پیشنهاد‌ها"
        />
        <ItemPackage
          icon={
            <BsGlobe
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="اختصاصی"
        />
      </div>
    </div>
  );
};

export default EvryThingPackage;
