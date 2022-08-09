import styled from "styled-components";
import { mobile, tablet } from '../../styles/resposive';

export const Container = styled.div``;

export const MainContent = styled.div`
  display: flex;
  padding: 0 2rem;

  ${tablet({ flexDirection: 'column', padding: '2rem' })};
  ${mobile({ flexDirection: 'column', padding: '0.5rem' })};
`;

export const SectionLeft = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  
  ${tablet({ padding: '1rem' })};
  ${mobile({ padding: '0.5rem' })};
`;

export const SectionRight = styled.div`
  flex: 1;
  padding: 1.1rem 2rem;

  ${tablet({ padding: '1rem' })};
  ${mobile({ padding: '0.5rem' })};
`;


