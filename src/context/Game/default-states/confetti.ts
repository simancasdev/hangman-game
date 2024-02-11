import {GameState} from "types";

export const defaultConfettiConfig: GameState["confettiConfig"] = {
  gravity: 0.7,
  recycle: false,
  numberOfPieces: 200,
  width: window.screen.width,
  height: window.screen.height,
};
