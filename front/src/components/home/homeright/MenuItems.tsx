import React from "react";
import MenuItem from "./MenuItem";
import { HiOutlineHome } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import "./menuitem.css";

const MenuItems = () => {
  return (
    <div>
      <MenuItem
        name="خانه"
        icon={<HiOutlineHome size={25} color="gray" className="menu_icon" />}
        link="/myirancell/home"
      />
      <MenuItem
        name="خرید بسته"
        icon={<MdLanguage size={25} color="gray" className="menu_icon" />}
        className="mt-1"
        link="/myirancell/#"
      />
      <MenuItem
        name="شارژ مجدد"
        icon={
          <BsLightningCharge size={25} color="gray" className="menu_icon" />
        }
        className="mt-1"
        link="/myirancell/#"
      />
      <MenuItem
        name="خدمات"
        icon={<FaRegHeart size={25} color="gray" className="menu_icon" />}
        className="mt-1"
        link="/myirancell/#"
      />
      <MenuItem
        name="سایر"
        icon={<FiSettings size={25} color="gray" className="menu_icon" />}
        className="mt-1"
        link="/myirancell/#"
      />
      <MenuItem
        name="خروج"
        className="mt-1 logout"
        link="/myirancell/#"
      />
      <div className="flex justify-center items-center mt-12">
        <button className="text-blue-400 yekanBold text-sm">Change To English</button>
      </div>
    </div>
  );
};

export default MenuItems;
