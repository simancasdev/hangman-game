import {Fragment} from "react";
import {useGame} from "context";
import {Check, X} from "react-feather";
import {Backdrop, Dialog} from "./styled";
import {Typography} from "components/Typography";

interface AlertProps {}

export const Alert: React.FC<AlertProps> = () => {
  const {alert, onAlert} = useGame();
  const {type, message, show} = alert;
  const Icon = type === "error" ? X : Check;

  return show ? (
    <Fragment>
      <Backdrop onClick={() => onAlert(false)} />
      <Dialog>
        <Icon />
        <Typography>{message}</Typography>
      </Dialog>
    </Fragment>
  ) : (
    <Fragment />
  );
};
