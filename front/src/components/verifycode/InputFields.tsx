import { useRef, useEffect, useState } from "react";
import InputVerify from "./InputVerify";
const InputFields = () => {
  const emailInputRef: any = useRef();
  const [step, setStep] = useState<number>(0);
  const [state, setState] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
    if (step === 4) return false;
    setStep((e) => e + 1);
  };

  useEffect(() => {
    if (step === 4) return;
    emailInputRef.current.focus();
  }, [state]);

  return (
    <div className="flex flex-row-reverse items-center mt-4">
      <InputVerify
        refInput={emailInputRef}
        name="value1"
        onChange={handleChange}
        maxLength={1}
        value={state.value1}
      />
      <InputVerify
        refInput={step === 1 ? emailInputRef : null}
        name="value2"
        onChange={handleChange}
        maxLength={1}
        value={state.value2}
      />
      <InputVerify
        refInput={step === 2 ? emailInputRef : null}
        name="value3"
        onChange={handleChange}
        maxLength={1}
        value={state.value3}
      />
      <InputVerify
        refInput={step === 3 ? emailInputRef : null}
        name="value4"
        onChange={handleChange}
        maxLength={1}
        value={state.value4}
      />
    </div>
  );
};

export default InputFields;
