import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = props => (
  <nav>
    <NavLink to="/">MorphLog</NavLink>
    <NavLink to="/project">Projekte</NavLink>
    <NavLink to="/profile">Profil</NavLink>
  </nav>
);

export default Menu;
