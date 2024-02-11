import {Fragment} from "react";
import {useGame} from "context";
import {Check} from "react-feather";
import {Container, Dialog} from "./styled";

interface AlertProps {}

export const Alert: React.FC<AlertProps> = () => {
  const {alert} = useGame();
  const {type, message} = alert;
  const showAlert = typeof type !== "undefined";
  return true ? (
    <Container>
      <Dialog>
        <Check />
        Has ganado
      </Dialog>
    </Container>
  ) : (
    <Fragment />
  );
};
