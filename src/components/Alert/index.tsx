import {Fragment} from "react";
import {useGame} from "context";
import {Check} from "react-feather";
import {Backdrop, Dialog} from "./styled";
import {Typography} from "components/Typography";

interface AlertProps {}

export const Alert: React.FC<AlertProps> = () => {
  const {alert, onAlert} = useGame();
  const {type, message, show} = alert;

  return show ? (
    <Fragment>
      <Backdrop onClick={() => {}} />
      <Dialog>
        <Check />
        <Typography>{message}</Typography>
      </Dialog>
    </Fragment>
  ) : (
    <Fragment />
  );
};
