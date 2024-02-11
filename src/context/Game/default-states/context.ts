import {Context} from "types";
import {defaultReducerState} from "./reducer";

export const defaultContextState: Context = {
  ...defaultReducerState,
  onStart: () => undefined,
  onAlert: () => undefined,
  onChange: () => undefined,
  onConfetti: () => undefined,
  onTimeIsOver: () => undefined,
};
