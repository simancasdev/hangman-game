import {useUI} from "context";
import {Fragment} from "react";
import {Container} from "./styled";
import {Backdrop} from "components/Backdrop";
import {Toggle, Typography} from "components";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const {menuOpened, defaultTheme, onMenu, toggleTheme} = useUI();
  return menuOpened ? (
    <Fragment>
      <Backdrop onClick={() => onMenu(false)} />
      <Container>
        <Typography color="#fff" fontWeight="bold">
          Cambiar tema
        </Typography>
        <Toggle
          style={{marginTop: 10}}
          isOn={defaultTheme === "dark"}
          onToggle={() =>
            toggleTheme(defaultTheme === "dark" ? "light" : "dark")
          }
        />
      </Container>
    </Fragment>
  ) : (
    <Fragment />
  );
};
