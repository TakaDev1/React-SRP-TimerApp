interface CountTimerType {
  count: number;
}

type Action = { type: "start" } | { type: "stop" } | { type: "reset" };

export type { CountTimerType, Action };
