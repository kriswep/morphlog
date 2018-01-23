import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import media from '../styles/media';

const HeaderContainer = styled.header`
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1.45rem), 0 100%);
  grid-area: header;
  background: ${props => props.theme.main};
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
  padding: 1rem 0.25rem;
  display: grid;
  grid-gap: 3px;
  grid-template-areas: 'nav' 'title';
  ${media.m`
    grid-gap: 10px;
  `};
`;

const NavContainer = styled.nav`
  grid-column: 3 span;
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    margin: 0 0.4rem 0 0;
    color: ${props => props.theme.darkShades};
  }
  a.active {
    color: ${props => props.theme.darkestShades};
  }
`;

const Title = styled(Link)`
  grid-column: 3 span;
  grid-area: title;
  text-decoration: none;
  color: ${props => props.theme.darkShades};
  h1 {
    margin: 0.125rem 0 0.5rem 0;
  }
`;

const Header = props => (
  <HeaderContainer>
    <Title to="/">
      <h1>MorphLog</h1>
    </Title>
    <NavContainer>
      <NavLink to="/project">Projekte</NavLink>
      <NavLink to="/profile">Profil</NavLink>
    </NavContainer>
  </HeaderContainer>
);

export default Header;
