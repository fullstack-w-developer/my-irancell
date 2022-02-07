import React from "react";
interface propsType {
  onClick: () => any;
}
const ButtonLogin = ({ onClick }: propsType) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <button
        onClick={onClick}
        className="text-blue-400 yekanBold rounded-md py-2 border-2 border-blue-500 w-5/6 md:w-6/12 flex justify-center items-center"
      >
        ورود
      </button>
    </div>
  );
};

export default ButtonLogin;
