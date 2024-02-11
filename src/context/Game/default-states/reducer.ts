import {GameState} from "types";
import {defaultAlertState} from "./alert";
import {INITIAL_GAME_DURATION} from "../helper";
import {defaultConfettiConfig} from "./confetti";

export const defaultReducerState: GameState = {
  stages: [],
  victory: false,
  word: undefined,
  currentStage: 1,
  displayWord: [],
  failAttempts: 0,
  status: "initial",
  showConfetti: false,
  alert: defaultAlertState,
  gameDuration: INITIAL_GAME_DURATION,
  confettiConfig: defaultConfettiConfig,
};
