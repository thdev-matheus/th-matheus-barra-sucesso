import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  height: ${(props) => props.height};
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

  textarea {
    background: transparent;
    align-items: center;
    flex: 1;
    outline: none;
    border: 0;
    color: var(--black);

    ::placeholder {
      color: var(--medium-black);
      line-height: 1.3rem;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
