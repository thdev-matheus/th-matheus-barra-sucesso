import styled from "styled-components";

export const Container = styled.form`
  height: auto;
  width: 80rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  margin: auto;
  padding: 2rem;

  text-align: center;

  .checkBoxContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  button {
    height: 4rem;
    width: 15%;

    font-size: 1.3rem;
  }
`;
