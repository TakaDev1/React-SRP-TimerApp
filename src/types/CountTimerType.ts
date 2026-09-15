interface CountTimerType {
  count: number;
  isRunning: boolean;
}

type CountTimerAction = { type: "START" } | { type: "STOP" } | { type: "RESET" } | { type: "TICK" };

export type { CountTimerType, CountTimerAction };
