import styled from "styled-components";
import { mobile } from "../../styles/resposive";

export const Container = styled.div`
  flex: 1;
`;

export const SeachArea = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme["background-input"]};
`;

export const InputArea = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  padding-left: 0.5rem;

  ::placeholder{
    font-style: italic;
    color: ${({ theme }) => theme["text-shade"]};
  }

  ${mobile({ fontSize: '1rem' })}
`;

export const AreaList = styled.div`
  overflow-y: auto;
  min-height: 405px;
  border-radius: 6px;
  box-shadow: 3px 3px 3px 4px ${({ theme }) => theme["text-primary"]};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AreaResults = styled.div`
  display: flex;
  min-height: 370px;
  flex-direction: column;
  justify-content: space-between;
`;

const baseArea = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme["text-primary"]};
`;

export const AreaTitle = styled(baseArea)`
  font-size: 1.5rem;

  ${mobile({ fontSize: '1.1rem' })};
`;

export const AreaComponent = styled(baseArea)`
 font-size: 1.1rem;
 
 &:last-child {
   border-bottom: none;
  }
`;

export const PaginationFooter = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
`;