
import styled from "styled-components";

export const AreaImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme["background-input"]};
`;

export const AreaPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 0 auto;
  align-items: center;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  strong{
    margin: 0 5px;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  width: 30px;
  height: 30px;
  font-weight: 600;
  text-align: center;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  margin: 0 5px;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme["text-primary"]};
  background-color: ${({ theme }) => theme["text-shade"]};

  &:hover{
    background-color: ${({ theme }) => theme["text-shade"]};
  }
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

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const AreaLoading = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  padding: 0 0.97rem;
  justify-content: space-between;
    
  span{
    margin: 0.25rem .02rem 0.75rem;
  }
`;