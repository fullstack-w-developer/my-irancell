import React from "react";
import { NavLink } from "react-router-dom";
import "./menuitem.css";

interface propsType {
  name: string;
  icon?: JSX.Element;
  className?: string;
  link: string;
}
const MenuItem = ({ name, icon, className, link }: propsType) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? `active_link bg-yellow-100 transition-all flex items-center  rounded-tr-full rounded-br-full py-2 cursor-pointer ${className}`
          : ` menu_item flex transition-all  items-center hover:bg-blue-100 rounded-tr-full rounded-br-full py-2 cursor-pointer ${className}`
      }
    >
      {icon}
      <p className="text-gray-700 text-sm yekanBold pr-2">{name}</p>
    </NavLink>
  );
};

export default MenuItem;
