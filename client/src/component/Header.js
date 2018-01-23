import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// const Nav = styled.nav`
//   grid-area: header;
// `;

import media from '../styles/media';

const HeaderContainer = styled.header`
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1.45rem), 0 100%);
  grid-area: header;
  background: ${props => props.theme.main};
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
  padding: 1.45rem 0;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 17.5rem;
  ${media.m`
  grid-gap: 10px;
  `} ${media.l`
    grid-template-columns: 20rem 1fr;
  `} ${media.xl`
    grid-template-columns: 35rem 1fr;
  `} ${media.xxl`
    grid-template-columns: 50rem 1fr;
  `} ${media.xxxl`
    grid-template-columns: 70rem 1fr;
  `} ${media.uxxxl`
    grid-template-columns: 100rem 1fr;
  `};
`;

const Header = props => (
  <HeaderContainer>
    <h1>MorphLog</h1>
    <nav>
      <NavLink to="/">MorphLog</NavLink>
      <NavLink to="/project">Projekte</NavLink>
      <NavLink to="/profile">Profil</NavLink>
    </nav>
  </HeaderContainer>
);

export default Header;
