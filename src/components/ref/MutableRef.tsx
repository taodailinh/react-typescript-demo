import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValref = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValref.current) window.clearInterval(interValref.current);
  };
  console.log("check component");
  console.log({ interValref });
  useEffect(() => {
    interValref.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    console.log("check effect");
    console.log({ interValref });
    return () => {
      console.log("check cleaner");
      console.log({ interValref });
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -{" "}
      <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
  );
};
