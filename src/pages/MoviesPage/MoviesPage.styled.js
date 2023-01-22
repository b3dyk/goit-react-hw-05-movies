import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 350px;
  border-radius: 4px;
  border: 1px solid #020930;
  background-color: transparent;

  :focus-within {
    border: 1px solid #f74f07;
    outline: 1px solid transparent;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  color: #f74f07;
  background-color: #020930;
  border-radius: 4px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
`;
