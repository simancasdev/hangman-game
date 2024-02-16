import {Dialog} from "./styled";
import {useGame} from "context";
import {Check, X} from "react-feather";
import {Fragment, useEffect} from "react";
import {Backdrop, Typography} from "components";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
