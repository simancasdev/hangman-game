import {reducer} from "./reducer";
import {IContext, Key} from "types";
import {
  useMemo,
  useReducer,
  useCallback,
  createContext,
  useContext,
} from "react";

export const Context = createContext<IContext>({
  answer: "",
  word: undefined,
  status: "initial",
  onStart: () => undefined,
  onChange: () => undefined,
});

export const useGame = (): IContext => useContext(Context);

interface GameProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const Provider: React.FC<GameProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    answer: "",
    word: undefined,
    status: "initial",
  });
  const {word} = state;

  const onStart = useCallback((): void => {
    dispatch({type: "start", payload: "amor"});
  }, []);

  const onChange = useCallback(
    (key: Key): void => {
      console.log(word);
      console.log(key);
    },
    [word]
  );

  const values = useMemo(() => ({...state, onStart, onChange}), [word]);
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
