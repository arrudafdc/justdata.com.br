import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const BrandSection = styled.section`
  margin-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-bottom: 16.5rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
  }
  span {
    color: ${(props) => props.theme.primary};
  }
  p {
    font-size: 2rem;
    max-width: 60%;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }
  @media (max-width: 720px) {
    span {
      display: block;
      margin-bottom: 0.25rem;
    }
    p {
      max-width: 80%;
    }
  }
`;

export const ContactButton = styled.button`
  background: ${(props) => props.theme.primary};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #9468f9;
  }
`;

export const ServiceSection = styled.section`
  margin-bottom: 12.5rem;
  padding: 0 1rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 5rem;
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: 992px) {
    article {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 720px) {
    article {
      grid-template-columns: 1fr;
    }
    p {
      max-width: 80%;
    }
    & {
      padding: 0rem;
    }
  }
`;
