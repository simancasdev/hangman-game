import {GameState} from "types";
import {defaultAlertState} from "./alert";
import {defaultConfettiConfig} from "./confetti";
import {INITIAL_GAME_DURATION} from "../constants";

export const defaultReducerState: GameState = {
  stages: [],
  victory: false,
  word: undefined,
  currentStage: 0,
  displayWord: [],
  failAttempts: 0,
  status: "initial",
  showConfetti: false,
  alert: defaultAlertState,
  gameDuration: INITIAL_GAME_DURATION,
  confettiConfig: defaultConfettiConfig,
};
