// src/styles/RegisterStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #3b82f6;
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 16px;
  width: 96px;
  height: 96px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const Link = styled.a`
  color: #2563eb;
  font-size: 14px;
  text-align: center;
  display: block;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;
