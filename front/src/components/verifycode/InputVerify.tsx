import React from "react";
interface propsType {
  maxLength: number;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  refInput: React.LegacyRef<HTMLInputElement> | undefined;
  value: number | string;
}
const InputVerify = ({
  maxLength,
  name,
  onChange,
  refInput,
  value,

}: propsType) => {
  return (
    <input
      value={value}
      maxLength={maxLength}
      ref={refInput}
      name={name}
      onChange={onChange}
      placeholder="x"
      className="placeholder:text-4xl pb-2 text-4xl text-blue-500  placeholder:text-gray-400 placeholder:text-center text-center outline-none border-b-2 w-8 border-blue-500 input_vrifyCode mx-1 ltr"
    />
  );
};

export default InputVerify;
