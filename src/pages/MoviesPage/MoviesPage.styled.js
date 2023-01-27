import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 24px;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #020930;
  background-color: transparent;
  border-radius: 4px;

  :focus-within {
    border: 1px solid #f74f07;
    outline: 1px solid transparent;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  cursor: pointer;
  border: none;
  color: #f74f07;
  background-color: #020930;
  border-radius: 4px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
`;
