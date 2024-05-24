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

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
  }
  span {
    color: ${(props) => props.theme.primary};
  }
  p {
    color: ${(props) => props.theme["gray-500"]};
    font-size: 1.25rem;
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
    p {
      max-width: 70%;
    }
    span {
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`;

export const ContactButton = styled.button`
  background: ${(props) => props.theme.primary};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  padding: 0.75rem 2rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #9468f9;
  }
`;
