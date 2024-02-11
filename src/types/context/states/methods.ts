import {Alert} from ".";
import {AlertConfig, Key} from "types";

export type GameMethods = {
  onStart: () => void;
  onTimeIsOver: () => void;
  onChange: (key: Key) => void;
  onConfetti: (payload: boolean) => void;
  onAlert: (
    show: boolean,
    message?: string,
    type?: Alert["type"],
    config?: AlertConfig
  ) => void;
};
