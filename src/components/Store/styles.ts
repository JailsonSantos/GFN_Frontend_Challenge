import styled from "styled-components";
import { mobile } from "../../styles/resposive";

export const Container = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme["text-shade"]};

  .red{
    font-weight: bold;
    color: ${({ theme }) => theme["text-secondary"]};
  }

  ${mobile({ fontSize: '0.875rem' })};
`;