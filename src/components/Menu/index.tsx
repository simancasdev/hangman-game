import {useUI} from "context";
import {Fragment} from "react";
import {Container} from "./styled";
import {Backdrop} from "components/Backdrop";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const {menuOpened, onMenu} = useUI();
  return menuOpened ? (
    <Fragment>
      <Backdrop onClick={() => onMenu(false)} />
      <Container />
    </Fragment>
  ) : (
    <Fragment />
  );
};
