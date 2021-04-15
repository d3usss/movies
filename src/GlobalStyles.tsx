import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700);

    html {
        background: linear-gradient(90deg, #00c6ff 10%, #0072ff 90%);  
        font-family: 'PT Sans', Helvetica, Arial, sans-serif;
        padding-top: 50px;
    }

    h1 {
        text-shadow: 1px 1px 10px rgba(black, .5);
    }

    h1, h2 {
        text-align: center;
        color: white;
        font-size: 2.5em;
        line-height: 1.3em;
        font-weight: 300;
    }

    h2 {
        margin-top: 100px;
        font-size: 1.3em;
        font-style: italic;
        font-weight: 100;
    }

    label {
        color: white;
    }
`;
