import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding: 24px;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 16px;
  padding: 4px;

  color: #020930;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;

  cursor: pointer;

  :hover,
  :focus {
    color: #f74f07;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
`;

export const Container = styled.div`
  padding: 16px;
  margin-top: 16px;
  border-top: 1px solid #020930;
  border-bottom: 1px solid #020930;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #020930;

  &.active {
    color: #f74f07;
  }

  :hover {
    color: #f74f07;
    text-decoration: underline;
  }
`;
