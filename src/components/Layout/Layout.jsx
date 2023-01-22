import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledList, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledList>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </StyledList>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
