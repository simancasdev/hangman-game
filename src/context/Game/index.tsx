import {reducer} from "./reducer";
import {IContext, Key} from "types";
import {
  useMemo,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

export const Context = createContext<IContext>({
  displayWord: [],
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
    word: undefined,
    displayWord: [],
    status: "initial",
  });
  const {word, displayWord, status} = state;

  const onStart = useCallback((): void => {
    let word: string, temp: string[], displayWord: string[];
    word = "zarza";
    temp = word.split("");
    displayWord = temp.map((hint, i) => {
      if (i === 0 || i + 1 === temp.length) return hint;
      return "";
    });
    dispatch({
      type: "start",
      payload: {
        word,
        displayWord,
      },
    });
  }, []);

  const onChange = useCallback(
    (key: Key): void => {
      let tempDisplay = [...displayWord];
      tempDisplay.pop();
      tempDisplay.shift();

      if (!word || tempDisplay.includes(key)) return;
      if (word.includes(key)) {
        let indexes: number[], temp: string[];
        indexes = [];
        temp = word.split("");
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === key) {
            indexes.push(i);
          }
        }
        dispatch({type: "right-try", payload: {indexes, key}});
      } else {
      }
    },
    [word, displayWord]
  );

  useEffect(() => {
    if (status !== "playing") return;
    let winner: boolean = true;
    for (const letter of displayWord) {
      if (!letter) winner = false;
    }
    if (winner) {
      dispatch({type: "winner"});
    }
  }, [state]);

  const values = useMemo(() => ({...state, onStart, onChange}), [state]);
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
