import styled from "styled-components";

export const Container = styled.div`
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  padding: 2rem;

  text-align: center;

  h1 {
    font-size: 8rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    img {
      width: 300px;
    }

    div {
      width: 24rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
