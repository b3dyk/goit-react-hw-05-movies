import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #020930;

  :hover,
  :focus {
    color: #f74f07;
    text-decoration: underline;
  }
`;
