import styled from "styled-components";
import { lighten } from 'polished'
import { mobile } from "../../styles/resposive";

export const ItemPagination = styled.button``;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme["text-header"]};  
  background-color: ${({ theme }) => theme["primary"]};

  transition: 0.5s;

  &:hover{
    cursor: pointer;
    color: ${({ theme }) => theme["text-header"]};
    background-color: ${({ theme }) => (lighten(0.1, theme["primary"]))};
  }

  &:disabled{  
    cursor: not-allowed;
    color: ${({ theme }) => theme["text-primary"]};
    background-color: ${({ theme }) => theme["text-shade"]};
  }


  ${mobile({ width: '28px', height: '28px' })};
`;

export const ButtonActived = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  cursor: default;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme["text-shade"]};
  background-color: ${({ theme }) => theme.primary};
`;