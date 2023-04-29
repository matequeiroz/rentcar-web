import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: var(--gray-200);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 7rem;

    nav {
        margin: 0 4.9rem;
        height: inherit;
        
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: inherit;
            list-style: none;

            svg {
                color: var(--gray-300);
            }
        }
    }
`