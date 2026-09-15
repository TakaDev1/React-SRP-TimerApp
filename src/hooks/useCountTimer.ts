import { useEffect, useReducer } from "react";
import { CountTimerReducer, initialState } from "../reducers/CountTimerReducer";

const useCountTimer = () => {
  const [state, dispatch] = useReducer(CountTimerReducer, initialState);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [state.isRunning]);

  const start = () => {
    dispatch({ type: "START" });
  };

  const stop = () => {
    dispatch({ type: "STOP" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return { count: state.count, isRunning: state.isRunning, start, stop, reset };
};

export default useCountTimer;
