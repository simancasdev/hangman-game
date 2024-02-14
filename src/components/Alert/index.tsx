import {useGame} from "context";
import {Typography} from "components";
import {Check, X} from "react-feather";
import {Backdrop, Dialog} from "./styled";
import {Fragment, useEffect} from "react";

interface AlertProps {}

export const Alert: React.FC<AlertProps> = () => {
  const {alert, onAlert} = useGame();
  const {type, message, show, config} = alert;
  const Icon = type === "error" ? X : Check;

  useEffect(() => {
    const {autoCloseMs} = config;
    if (show && autoCloseMs) {
      setTimeout(() => {
        onAlert(false);
      }, autoCloseMs);
    }
  }, [show, config]);

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
