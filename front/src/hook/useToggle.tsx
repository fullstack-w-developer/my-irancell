import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const closeToggle = () => {
    setToggle(!toggle);
  };
  return {
      toggle,
      closeToggle
  };
};
