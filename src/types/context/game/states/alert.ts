import {AlertConfig} from "types/alert";

export type Alert = {
  show: boolean;
  config: AlertConfig;
  message: string | undefined;
  type: "success" | "error" | undefined;
};
