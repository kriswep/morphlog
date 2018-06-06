import React from 'react';
import styled from 'styled-components';

import media from '../styles/media';

const ContentContainer = styled.section`
  padding: 1rem 0.25rem 0.75rem;
  ${media.m`
    padding: 1rem 0.75rem 0.75rem;
  `};
`;

const Home = () => (
  <ContentContainer>
    <h1>TODO...</h1>
  </ContentContainer>
);

export default Home;
