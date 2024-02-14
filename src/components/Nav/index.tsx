import {Fragment} from "react";
import {useGame} from "context";
import {Typography} from "components/Typography";
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
  const {status, currentStage, stages, gameDuration, onTimeIsOver} = useGame();
  const isPlaying = status === "playing";
  return (
    <Container>
      {isPlaying ? (
        <Fragment>
          <Block style={{justifyContent: "flex-start"}}>
            <CountdownCircleTimer
              {...countDownProps}
              duration={gameDuration}
              onComplete={onTimeIsOver}
            >
              {({remainingTime}) => <TimeLabel>{remainingTime}</TimeLabel>}
            </CountdownCircleTimer>
          </Block>
          <Block style={{justifyContent: "flex-end"}}>
            <Typography color="#fff" fontWeight="bold" fontSize="1.2rem">
              {currentStage + 1}/{stages.length}
            </Typography>
          </Block>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Container>
  );
};
