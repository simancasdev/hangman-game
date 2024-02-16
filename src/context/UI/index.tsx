import {reducer} from "./reducer";
import {GameLanguage, GameTheme, UIContext as IContext, Language} from "types";
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

  const toggleTheme = useCallback((payload: GameTheme) => {
    dispatch({type: "theme", payload});
  }, []);

  const toggleLanguage = useCallback((payload: GameLanguage) => {
    dispatch({type: "language", payload});
  }, []);

  const values = useMemo(
    () => ({...state, onMenu, toggleTheme, toggleLanguage}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};
