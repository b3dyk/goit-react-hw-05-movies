import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../img/tmdb.svg';
import {
  Container,
  Logo,
  StyledHeader,
  StyledList,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <Link to="/">
            <Logo src={logo} alt="TMDB logo" width="100" />
          </Link>
          <nav>
            <StyledList>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </StyledList>
          </nav>
        </Container>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
