import styled, { css } from "styled-components";

type ContainerProps = {
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: 100%;
    border: 1px solid rgba(168, 175, 193, 1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    color: var(--primary-text);

    & + div{
        margin-top: 16px;
    }

    ${(props) =>
        props.isFocused && css`
            border-color: var(--vli-blue);
            color: var(--vli-blue);
        `
    }

    input{
        border: none;
        outline: none;
        padding: 16px 18px;

        &:focus ~ span,
        &:valid ~ span
        {
            top: -1px;
            left: 15px;
            padding: 2px 4px;
            font-size: 0.7rem;
        }
    }

    span{
        position: absolute;
        font: 400 0.8rem 'Inter', sans-serif;
        top: 18px;
        left: 15px;
        pointer-events: none;
    }
`;