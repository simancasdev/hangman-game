import styled from "styled-components";

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  backdrop-filter: blur(6px);
  background-color: rgba(40, 44, 52, 0.5);
`;

export const Dialog = styled.div`
  top: 50%;
  left: 50%;
  z-index: 2;
  color: #fff;
  padding: 1rem;
  width: 200px;
  height: 200px;
  display: flex;
  text-align: center;
  position: absolute;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: rgba(40, 44, 52, 1);
  border: 1.3px solid rgba(255, 255, 255, 0.2);
`;
