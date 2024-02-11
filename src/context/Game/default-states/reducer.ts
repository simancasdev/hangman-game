import {GameState} from "types";
import {defaultAlertState} from "./alert";
import {defaultConfettiConfig} from "./confetti";

export const defaultReducerState: GameState = {
  victory: false,
  word: undefined,
  displayWord: [],
  failAttempts: 0,
  status: "initial",
  showConfetti: false,
  alert: defaultAlertState,
  confettiConfig: defaultConfettiConfig,
};
