import { css } from 'styled-components';

const sizes = {
  uxxxl: 3840,
  xxxl: 2560,
  xxl: 1920,
  xl: 1280,
  l: 1024,
  m: 768,
  s: 512,
  xs: 376,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
