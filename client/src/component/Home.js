import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
  grid-area: content;
`;

const Home = props => (
  <ContentContainer>
    <h1>MorphLog</h1>
  </ContentContainer>
);

export default Home;
