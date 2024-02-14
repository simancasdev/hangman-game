import {GameContext} from "types";
import {defaultReducerState} from "./reducer";

export const defaultContextState: GameContext = {
  ...defaultReducerState,
  onStart: () => undefined,
  onAlert: () => undefined,
  onChange: () => undefined,
  onConfetti: () => undefined,
  onTimeIsOver: () => undefined,
};
