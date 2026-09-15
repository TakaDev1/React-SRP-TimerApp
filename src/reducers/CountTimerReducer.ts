import type { CountTimerAction, CountTimerType } from "../types/CountTimerType";

const initialState: CountTimerType = { count: 0, isRunning: false };

const CountTimerReducer = (state: CountTimerType, action: CountTimerAction): CountTimerType => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return initialState;
    case "TICK":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export { initialState, CountTimerReducer };
