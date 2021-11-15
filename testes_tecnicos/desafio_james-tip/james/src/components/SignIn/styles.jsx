import styled from "styled-components";
import { primary, secondary, colorToGradient } from "../../styles/colors";

export const FormContainer = styled.form`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 870px) {
    width: 100%;
  }

  h1 {
    color: ${colorToGradient};
    font-weight: bolder;
  }
`;

export const LoginButton = styled.button`
  width: 340px;
  padding: 8px;
  border: none;
  border-radius: 2%;
  background: ${primary};
  color: white;
  font-weight: bolder;
  &:hover {
    background: ${secondary};
  }
`;

export const BorderIcon = styled.div`
  background: ${colorToGradient};
  padding: 2%;
  border-radius: 80%;

  img {
    width: 6rem;
    height: 6rem;
  }
`;
