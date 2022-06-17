import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  margin: auto;
  padding: 2rem;

  text-align: center;

  div {
    width: 70%;
  }
`;

export const BoxApresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const ContainerPergunta = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  border-radius: 1.5rem;

  padding: 1rem;

  background-color: var(--gray);

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: var(--dark);

    text-align: left;

    p {
      font-size: 10pt;

      span {
        font-weight: bold;
        font-size: 11pt;

        color: var(--blue);
      }
    }
  }

  button {
    width: 5rem;
  }
`;
