import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 60%;

  div {
    font-size: 1.8rem;
    span {
      color: var(--red);
    }
  }
`;
export const InputContainer = styled.div`
  background: var(--gray);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--dark);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  margin-top: 0.5rem;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    ::placeholder {
      color: var(--medium-black);
    }
  }

  svg {
    margin-right: 1rem;
  }
`;
