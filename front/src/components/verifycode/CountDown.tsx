import { useEffect, useState } from "react";

const CountDown = (props: any) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="mt-2">
          {minutes === 0 && seconds === 0 ? <div className="flex items-center mt-1">
              <p className="text-blue-400 bg-blue-50 yekanBold text-xs ml-2">ارسال مجدد با تماس</p>
              <p className="text-blue-400 bg-blue-50 yekanBold text-xs mr-2">ارسال مجدد با پیامک</p>
      </div> : (
        <h1 className="text-gray-500 yekanBold text-sm">
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};

export default CountDown;
