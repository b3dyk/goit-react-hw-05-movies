import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  transform: scale(1);
  transition: transform 300ms ease;

  :hover {
    transform: scale(1.03);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #020930;

  :hover,
  :focus {
    color: #f74f07;
    text-decoration: underline;
  }
`;

export const Poster = styled.img`
  display: block;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Text = styled.p`
  margin: 0;
  max-width: 235px;
  text-align: start;
  font-weight: 500;
`;

export const Vote = styled.span`
  display: block;
  color: #fff;
  width: 30px;
  height: 20px;
  border-radius: 4px;
  background-color: #f74f07;
`;
