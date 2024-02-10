import styled from "styled-components";

export const Key = styled.button`
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 2.2rem;
  transition: all ease 0.2s;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: -1px 2px 1px 1px rgba(255, 255, 255, 0.2);
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 4px;
  text-transform: capitalize;
  &:hover {
    box-shadow: -2px 3px 1px 1px rgba(255, 255, 255, 0.4);
  }
  &:active {
    color: #000;
    transform: scale(0.8);
    background-color: #fff;
  }
`;

export const Container = styled.div`
  padding: 1rem;
  max-width: 520px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  gap: 1rem;
`;
