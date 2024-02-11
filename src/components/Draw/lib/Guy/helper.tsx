import {Arm, Body, Head, Knot, Leg} from "./styled";

export const PARTS: JSX.Element[] = [
  <Head width="50" height="50" viewBox="0 0 50 50" fill="none">
    <circle cx="25" cy="25" r="23" stroke="white" strokeWidth="4" />
  </Head>,
  <Body width="4" height="35" viewBox="0 0 4 35" fill="none">
    <path
      d="M-2.273e-06 52C-2.32128e-06 53.1046 0.895428 54 2 54C3.10457 54 4 53.1046 4 52L-2.273e-06 52ZM0 -8.74229e-08L-2.273e-06 52L4 52L4 8.74229e-08L0 -8.74229e-08Z"
      fill="white"
    />
  </Body>,
  <Arm
    width="30"
    height="40"
    viewBox="0 0 30 40"
    fill="none"
    style={{
      right: 0,
    }}
  >
    <path
      d="M28 2L2 47.0333"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Arm>,
  <Arm
    width="30"
    height="40"
    viewBox="0 0 30 40"
    fill="none"
    style={{
      left: 0,
    }}
  >
    <path
      d="M28 47.0333L2 2.00001"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Arm>,
  <Leg
    width="30"
    height="40"
    viewBox="0 0 30 40"
    fill="none"
    style={{
      right: 0,
    }}
  >
    <path
      d="M28 2L2 47.0333"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Leg>,
  <Leg
    width="30"
    height="40"
    viewBox="0 0 30 40"
    fill="none"
    style={{
      left: 0,
    }}
  >
    <path
      d="M28 47.0333L2 2.00001"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Leg>,
  <Knot width="90" height="4" viewBox="0 0 90 4" fill="none">
    <path d="M2 2L88 2" stroke="white" strokeWidth="3" strokeLinecap="square" />
  </Knot>,
];
