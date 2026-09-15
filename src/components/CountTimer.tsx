import React from "react";
import useCountTimer from "../hooks/useCountTimer";

const CountTimer = () => {
  const { count, start, stop, reset } = useCountTimer();
  return (
    <div className="bg-blue-400 text-black fong-bold w-1/2 py-10 rounded-xl">
      <p className="">
        CountTimer: <span className="text-2xl">{count}</span>{" "}
      </p>
      <div className="flex gap-10 justify-around mt-10 px-10">
        <button
          onClick={start}
          className="bg-green-400 w-1/2 rounded-full hover:opacity-80 cursor-pointer"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-red-400 w-1/2 rounded-full hover:opacity-80 cursor-pointer"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-pink-400 w-1/2 rounded-full hover:opacity-80 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountTimer;
