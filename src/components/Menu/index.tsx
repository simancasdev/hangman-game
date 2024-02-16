import {useUI} from "context";
import {Fragment} from "react";
import {Container} from "./styled";
import {Moon, Sun} from "react-feather";
import {Backdrop} from "components/Backdrop";
import {Box, Toggle, Typography} from "components";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  const {
    language,
    menuOpened,
    defaultTheme,
    onMenu,
    toggleTheme,
    toggleLanguage,
  } = useUI();
  return menuOpened ? (
    <Fragment>
      <Backdrop onClick={() => onMenu(false)} />
      <Container>
        <Box flexDirection="column" gap={20}>
          <Typography fontSize={25} fontWeight="bold">
            Menú del juego
          </Typography>
          <Box alignItems="center" gap={10}>
            <Typography fontSize={18} fontWeight="bold">
              ES
            </Typography>
            <Toggle
              isOn={language === "en"}
              onToggle={() => toggleLanguage(language === "en" ? "es" : "en")}
            />
            <Typography fontSize={18} fontWeight="bold">
              EN
            </Typography>
          </Box>
          <Box alignItems="center" gap={10}>
            <Moon />
            <Toggle
              isOn={defaultTheme === "dark"}
              onToggle={() =>
                toggleTheme(defaultTheme === "dark" ? "light" : "dark")
              }
            />
            <Sun />
          </Box>
        </Box>
      </Container>
    </Fragment>
  ) : (
    <Fragment />
  );
};
