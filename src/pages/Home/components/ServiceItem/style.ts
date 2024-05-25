import styled from "styled-components";

export const ServiceItemContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 6px;
    background: rgb(130, 87, 229);
    background: linear-gradient(
      152deg,
      rgba(130, 87, 229, 1) 0%,
      rgba(72, 48, 127, 1) 100%
    );
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 300;
    color: ${(props) => props.theme["gray-400"]};
  }
`;
