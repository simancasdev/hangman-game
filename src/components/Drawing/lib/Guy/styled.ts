import styled from "styled-components";

export const Canvas = styled.div`
  position: relative;
  background-color: red;
  height: 120px;
`;

export const Head = styled.svg`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Body = styled.svg`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
`;

export const Arm = styled.svg`
  position: absolute;
  top: 44%;
`;

export const Leg = styled.svg`
  position: absolute;
  bottom: 0;
`;

export const Knot = styled.svg`
  position: absolute;
  top: 42%;
`;
