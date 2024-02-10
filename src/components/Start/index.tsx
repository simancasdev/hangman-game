import {Fragment} from "react";
import {Button} from "./styled";
import {useGame} from "context";

interface StartProps {}

export const Start: React.FC<StartProps> = () => {
  const {onStart, status} = useGame();
  const show: boolean = status === "initial";
  return show ? (
    <Button children="Let's get started" onClick={onStart} />
  ) : (
    <Fragment />
  );
};
