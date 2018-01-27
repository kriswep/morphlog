import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.lightAccent};
  color: ${props => props.theme.lightShades};
  border: 1px solid ${props => props.theme.positiveColor};
  background: linear-gradient(
    to bottom,
    ${props => props.theme.positiveColor},
    ${props => props.theme.positiveDarkColor}
  );
  &:active,
  &:hover {
    background: linear-gradient(
      to bottom,
      ${props => props.theme.altPositiveColor},
      ${props => props.theme.altPositiveDarkColor}
    );
  }
`;

export default Button;
