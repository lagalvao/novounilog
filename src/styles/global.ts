import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 60%--vli-orange;
        --primary-text: #596073;
        --secondary-text: #A8AFC1;
        --light-text: #ffffff;
        --vli-blue: #0074C0;
        --vli-orange: #F37A19;
        --vli-bg: #EFF3F8;
        --vli-wht: #ffffff;
    }
    
    body{
        background: var(--vli-wht);
        -webkit-font-smoothing: antialiased;
        font: 600 1rem 'Inter', sans-serif;
    }

    input, textarea, button{
        font: 400 1rem 'Inter', sans-serif;
    }

    a{
        text-decoration: none;;
    }
`;