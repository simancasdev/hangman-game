import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const Hint = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 2rem;
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background-color: #fff;
  }
`;
