import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
import ItemQuickAccess from "./ItemQuickAccess";
import { BsPatchPlus } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
const QuickAccess = () => {
  return (
    <>
      <div className="flex items-center flex-wrap">
        <ItemQuickAccess
          icon={
            <MdAirplanemodeActive
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="رومینگ"
        />
        <ItemQuickAccess
          icon={
            <BsPatchPlus
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="بوم"
        />
        <ItemQuickAccess
          icon={
            <AiOutlineRedo
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="اختصاصی"
        />
        <ItemQuickAccess
          icon={
            <FaUserPlus
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="حساب چند کاربره"
        />
        <ItemQuickAccess
          icon={
            <ImUsers
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="دعوت از دوستان"
        />
        <ItemQuickAccess
          icon={
            <BsPlusCircleFill
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="خرید بسته"
        />
        <ItemQuickAccess
          icon={
            <MdLocalOffer
              size={30}
              color="#fff"
              className="bg-blue-500 rounded-full p-1"
            />
          }
          name="پیشنهاد‌ها"
        />
      </div>
    </>
  );
};

export default QuickAccess;
