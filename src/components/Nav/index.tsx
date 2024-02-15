import {Menu, X} from "react-feather";
import {useGame, useUI} from "context";
import {IconButton, Typography} from "components";
import {Container, TimeLabel, Block} from "./styled";
import {CountdownCircleTimer, Props} from "react-countdown-circle-timer";

interface NavProps {}

const countDownProps: Props = {
  size: 45,
  duration: 0,
  isPlaying: true,
  strokeWidth: 3.5,
  colorsTime: [5, 0],
  colors: ["#fff", "#ff0000"],
};

export const Nav: React.FC<NavProps> = () => {
  const {menuOpened, onMenu} = useUI();
  const {status, currentStage, stages, gameDuration, onTimeIsOver} = useGame();
  const isPlaying = status === "playing";
  const MenuIcon = menuOpened ? X : Menu;

  return (
    <Container>
      <Block style={{justifyContent: "flex-start"}}>
        {isPlaying ? (
          <CountdownCircleTimer
            {...countDownProps}
            duration={gameDuration}
            onComplete={onTimeIsOver}
          >
            {({remainingTime}) => <TimeLabel>{remainingTime}</TimeLabel>}
          </CountdownCircleTimer>
        ) : (
          <div />
        )}
      </Block>
      {isPlaying ? (
        <Block>
          <Typography color="#fff" fontWeight="bold" fontSize="1.2rem">
            {currentStage + 1}/{stages.length}
          </Typography>
        </Block>
      ) : (
        <div />
      )}
      <Block style={{justifyContent: "flex-end"}}>
        <IconButton
          onClick={() => onMenu(!menuOpened)}
          children={<MenuIcon color="#fff" />}
        />
      </Block>
    </Container>
  );
};
