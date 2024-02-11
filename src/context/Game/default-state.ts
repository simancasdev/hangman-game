import {AppState, IContext} from "types";

export const defaultReducerState: AppState = {
  victory: false,
  word: undefined,
  displayWord: [],
  failAttempts: 0,
  status: "initial",
  showConfetti: false,
  alert: {
    type: undefined,
    message: undefined,
  },
  confettiConfig: {
    gravity: 0.7,
    recycle: false,
    numberOfPieces: 200,
    width: window.screen.width,
    height: window.screen.height,
  },
};

export const defaultContextState: IContext = {
  ...defaultReducerState,
  onStart: () => undefined,
  onChange: () => undefined,
  onConfetti: () => undefined,
  onTimeIsOver: () => undefined,
};
