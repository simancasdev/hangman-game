import {Style} from "types/style";
import {Container, Switch} from "./styled";

interface ToggleProps extends Style {
  isOn: boolean;
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({isOn, style, onToggle}) => {
  return (
    <Container
      style={style}
      onClick={onToggle}
      children={
        <Switch
          style={{
            left: isOn ? "calc(60px - 32px)" : "2px",
          }}
        />
      }
    />
  );
};
