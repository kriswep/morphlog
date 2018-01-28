import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

import media from '../styles/media';

const HeaderContainer = styled.div`
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
    padding 1rem 0.75rem;
  `};
`;

const activeItem = 'home';
const Header = props => (
  <HeaderContainer>
    <Menu pointing secondary>
      <Menu.Item as={Link} to="/" active={props.match.isExact}>
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/project">
        Projects
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/profile">
          Profile
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </HeaderContainer>
);

export default Header;
