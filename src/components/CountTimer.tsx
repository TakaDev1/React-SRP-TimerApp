import React from "react";
import useCountTimer from "../hooks/useCountTimer";

const CountTimer = () => {
  const { count, start, stop, reset } = useCountTimer();
  return (
    <div>
      <p>CountTimer: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountTimer;
