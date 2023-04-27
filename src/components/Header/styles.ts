import styled from "@emotion/styled";

export const Header = styled.header`
    background-color: var(--black-900);
    padding: 0 1rem;
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    min-width: 375px;

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    span {
        color: var(--gray-300);
        font-size: 1.5rem;
        display: inline-block;
    }
`