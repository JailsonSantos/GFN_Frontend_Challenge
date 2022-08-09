import styled from "styled-components";
import { mobile, tablet } from "../../styles/resposive";

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1rem 4rem;
  align-items: center;
  background:  ${({ theme }) => theme.primary};
  
  ${tablet({ padding: '1rem 3rem' })};
  ${mobile({ padding: '0.5rem 1rem' })};
  
`;

export const TitleHeader = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme["text-header"]} ;
  
  ${mobile({ padding: '0.5rem', fontSize: '1.5rem', textAlign: 'center' })};
`;