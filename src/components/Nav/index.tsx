import {X} from "react-feather";
import {useGame} from "context";
import {Container, TimeLabel} from "./styled";
import {CountdownCircleTimer} from "react-countdown-circle-timer";

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const {status, onTimeIsOver} = useGame();
  return (
    <Container>
      {status === "playing" ? (
        <CountdownCircleTimer
          isPlaying
          size={45}
          duration={5}
          strokeWidth={3.5}
          colorsTime={[5, 0]}
          onComplete={onTimeIsOver}
          colors={["#fff", "#ff0000"]}
        >
          {({remainingTime}) => <TimeLabel>{remainingTime}</TimeLabel>}
        </CountdownCircleTimer>
      ) : (
        <div />
      )}
      <X color="#fff" />
    </Container>
  );
};
