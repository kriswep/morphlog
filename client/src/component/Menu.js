import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  grid-area: header;
`;

const Menu = props => (
  <Nav>
    <NavLink to="/">MorphLog</NavLink>
    <NavLink to="/project">Projekte</NavLink>
    <NavLink to="/profile">Profil</NavLink>
  </Nav>
);

export default Menu;
