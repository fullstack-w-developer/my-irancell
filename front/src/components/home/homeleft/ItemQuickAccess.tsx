import React from "react";
interface propsType {
  icon: JSX.Element;
  name: string;
}
const ItemQuickAccess = ({ icon, name }: propsType) => {
  return (
    <div className="m-2 flex items-center bg-blue-100 rounded-full cursor-pointer">
      {icon}
      <p className="yekanBold text-gray-700 text-sm px-2">{name}</p>
    </div>
  );
};

export default ItemQuickAccess;
