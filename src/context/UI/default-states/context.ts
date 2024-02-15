import {UIContext} from "types";
import {defaultReducerState} from "./reducer";

export const defaultContextState: UIContext = {
  ...defaultReducerState,
  onMenu: () => undefined,
};
