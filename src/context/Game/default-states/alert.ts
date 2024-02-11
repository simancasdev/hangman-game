import {Alert} from "types";

export const defaultAlertState: Alert = {
  show: false,
  type: undefined,
  message: undefined,
  config: {
    autoCloseMs: 2000,
  },
};
