import styled, { keyframes } from "styled-components";

const rotatingEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Logo = styled.img`
  width: 200px;
  animation: ${rotatingEffect} 6s linear infinite;
`;
export const Header = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin: 8px 0;
`;
export const Content = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;
export const Question = styled.label`
  display: block;
  font-size: 24px;
  margin: 8px 0;
`;
export const Error = styled.div`
  font-size: 12px;
  color: #cc0000;
`;

export const Option = styled.button`
  border: 2px solid #00c8ff;
  color: #00c8ff;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  border-radius: 4px;
  display: block;
  background: transparent;
  margin: 8px 0;
`;
