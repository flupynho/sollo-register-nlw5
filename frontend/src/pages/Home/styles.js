import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .tabela {
    width: 60rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: #003f63;
    margin-bottom: 10px;

    :hover {
      background-color: ${shade(0.2, "#003f63")};
    }

    :focus {
      background-color: ${shade(0.2, "#003f63")};
    }
  }
`;
