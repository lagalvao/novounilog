import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    @media(max-width: 990px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 50%;

    form{
        margin: 40px 40px;
        width: 480px;

        h1{
            font: 600 1.2rem 'Inter', sans-serif;
            color: var(--vli-blue);
            margin-bottom: 12px;;
        }
    }
`;

export const Footer = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;

    a{
        font: 400 1rem 'Inter', sans-serif;
        color: var(--primary-text);
    }
`;

export const Background = styled.img`
    flex: 1;
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;

    @media(max-width: 990px){
        display: none;
    }
`;