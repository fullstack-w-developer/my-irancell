import React from "react";

interface propsType{
    className?: string;
    src: string;
    alt: string;
    text:string
}
const ItemFooter = ({className,src,alt,text}:propsType) => {
  return (
    <div className={`flex items-center mr-4 ${className}`}>
          <img src={src} alt={ alt}/>
          <p className="yekanBold text-sm text-blue-400 pr-2">{ text}</p>
    </div>
  );
};

export default ItemFooter;
