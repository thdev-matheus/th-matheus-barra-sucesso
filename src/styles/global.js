import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    ::-webkit-scrollbar {
        display: none;
    }
    }

    :root {
        --dark: #2a2e31;
        --medium-black: #696969;
        --gray: #d3dbe3;
        --blue: #546de5;
        --medium-blue: #778beb;
        --red: #ed3237;
    }

    body {
        background: var(--dark);
        color: var(--gray);
    }

    body, input, button, textarea {
        font-family: 'Comfortaa', cursive;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Satisfy', cursive;
        font-size: 6rem;
        font-weight: lighter;

    }

    h2, h3, h4, h5, h6 {
        font-family: 'Comfortaa', cursive;
        font-weight: 700;
        font-size: 3.5rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
