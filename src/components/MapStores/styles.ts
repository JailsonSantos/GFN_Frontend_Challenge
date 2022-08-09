import styled from "styled-components";
import { mobile } from "../../styles/resposive";

export const Container = styled.div`
  flex: 1;
  
  ${mobile({ marginTop: '1rem' })};
`;

export const SeachArea = styled.div`
  width: 75%;
  display: flex;
  padding: 0.7rem 0.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme }) => theme["background-input"]};

  ${mobile({ width: '100%' })};
`;

export const InputArea = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: right;
  font-size: 1.2rem;
  padding: 0 0.5rem;

  ::placeholder{
    text-align: right;
    font-style: italic;
    color: ${({ theme }) => theme["text-shade"]};
  }

  ${mobile({ fontSize: '1rem' })};
`;

export const SpanArea = styled.span`
  padding: 0.23rem;
  font-size: 1.2rem;
  align-items: right;
  color: ${({ theme }) => theme["text-shade"]};
`;

export const AreaMap = styled.div`
  width: 100%;
  height: 410px;
  overflow-y: auto;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 3px 3px 3px 4px ${({ theme }) => theme["text-primary"]};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AreaTitle = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 1.5rem;
  
  ${mobile({ fontSize: '1.2rem', textAlign: 'center' })};
`;