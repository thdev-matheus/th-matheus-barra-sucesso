import styled from "styled-components";

export const Container = styled.button`
  height: 6rem;
  width: 30%;

  margin: 2rem 0;

  border-radius: 1rem;
  border: 2px solid var(--dark);

  font-weight: bold;
  font-size: 1.5rem;

  background-color: var(--medium-blue);
  color: var(--gray);

  transition: 0.5s;
  :hover {
    background-color: var(--blue);
    border: 2px solid var(--dark);
  }
`;
