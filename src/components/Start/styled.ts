import styled from "styled-components";

export const Button = styled.button`
  padding: 1.5rem 3rem;
  transition: all ease 0.3s;
  border-radius: 6px;
  font-weight: bold;
  color: #fff;
  font-size: 1.1rem;
  box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.5);
  background: rgb(113, 114, 199);
  background: linear-gradient(
    180deg,
    rgba(113, 114, 199, 1) 64%,
    rgba(74, 75, 131, 1) 100%
  );
  &:active {
    transform: scale(0.9);
  }
`;
