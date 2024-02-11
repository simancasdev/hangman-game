import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
`;

export const Dialog = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: red;
  flex-direction: column;
  justify-content: center;
`;
