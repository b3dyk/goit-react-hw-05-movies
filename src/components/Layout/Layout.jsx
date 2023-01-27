import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  StyledHeader,
  StyledList,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </StyledList>
        </Container>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
