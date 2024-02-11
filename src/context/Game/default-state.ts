import {IContext} from "types";

export const defaultState: IContext = {
  displayWord: [],
  failAttempts: 0,
  word: undefined,
  status: "initial",
  showConfetti: false,
  confettiConfig: {
    gravity: 0.7,
    recycle: false,
    numberOfPieces: 200,
    width: window.screen.width,
    height: window.screen.height,
  },
  onStart: () => undefined,
  onChange: () => undefined,
  onConfetti: () => undefined,
};
