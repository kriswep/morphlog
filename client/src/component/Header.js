import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Icon } from 'semantic-ui-react';

import media from '../styles/media';

const activeItem = 'home';
const Header = props => (
  <header>
    <Menu color="teal" size="huge" pointing secondary>
      <Menu.Item as={Link} to="/" active={props.match.isExact}>
        <Icon size="large" name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/project">
        <Icon size="large" name="space shuttle" />
        Projects
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/profile">
          <Icon size="large" name="user circle outline" />
          Profile
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </header>
);

export default Header;
