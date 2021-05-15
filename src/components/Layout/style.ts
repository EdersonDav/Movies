import styled from 'styled-components';

import section from 'assets/section.png';

export const LayoutWrapper = styled.div`
  padding: 107px 25%;
  background-image: url(${section});
  background-repeat: no-repeat;
  height: calc(100vh - 107px);
  background-size: cover;
  background-position-x: center;
`;

export const Footer = styled.div`
  width: 200%;
  margin-left: -50%;
  height: 112px;
  background: #18181c;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;
