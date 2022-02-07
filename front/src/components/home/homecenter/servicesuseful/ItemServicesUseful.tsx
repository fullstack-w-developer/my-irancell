import React from "react";
interface propsType{
    src:string;
    alt:string;
    name:string
}
const ItemServicesUseful = ({src,alt,name}:propsType) => {
  return (
    <div className="flex justify-center items-center px-5 py-4 bg-white shadow-md rounded-2xl flex-col m-1">
      <img src={src} alt={alt} className="h-14 w-14" />
      <p className="text-xs yekanBold ">{name}</p>
    </div>
  );
};

export default ItemServicesUseful;
