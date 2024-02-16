import {Children, Style} from "types";
import {Container} from "./styled";
import {CSSProperties} from "styled-components";

interface BoxProps
  extends Children<any>,
    Style,
    Pick<
      CSSProperties,
      | "gap"
      | "display"
      | "gridGap"
      | "alignItems"
      | "flexDirection"
      | "justifyContent"
      | "gridTemplateRows"
      | "gridTemplateColumns"
    > {}

export const Box: React.FC<BoxProps> = (props) => {
  const {children, style, ...styleProps} = props;
  const {display = "flex"} = styleProps;
  return (
    <Container style={{...styleProps, display, ...style}} children={children} />
  );
};
