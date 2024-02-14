import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 0 1rem;
`;

export const Hint = styled.div`
  color: #fff;
  height: 80px;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
  text-transform: capitalize;

  &::after {
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    border-radius: 1rem;
    background-color: #fff;
    transition: all ease 0.3s;
  }
`;
