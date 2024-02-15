import {reducer} from "./reducer";
import {UIContext as IContext} from "types";
import {defaultContextState, defaultReducerState} from "./default-states";
import {
  useMemo,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

export const UIContext = createContext<IContext>(defaultContextState);

export const useUI = (): IContext => useContext(UIContext);

interface UIProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider: React.FC<UIProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultReducerState);

  const onMenu = useCallback((payload: boolean) => {
    dispatch({type: "menu", payload});
  }, []);

  const values = useMemo(
    () => ({...state, onMenu}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};
