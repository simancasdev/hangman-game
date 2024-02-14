import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  transition: all ease 0.3s;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
