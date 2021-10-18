import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    background: var(--vli-orange);
    border: none;
    color: var(--light-text);
    cursor: pointer;
    border: 0;
    font: 600 1rem 'Inter', sans-serif;
    text-transform: uppercase;
    border-radius: 4px;
    margin-top: 12px;

    &:hover{
        filter: brightness(0.9);
    }
`;