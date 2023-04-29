import styled from "@emotion/styled";

type InfoContentProps = {
  price?: boolean;
};

export const Container = styled.section`
  background-color: var(--white-100);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
`;

export const InfoTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  color: var(--gray-300);
  text-transform: uppercase;
`;
export const InfoContent = styled.h5<InfoContentProps>`
  font-size: 1.5rem;
  line-height: 1.6rem;
  color: ${(props) => (props.price ? `var(--red-900)` : `var(--gray-600)`)};
  padding-top: 0.4rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
