import styled from 'styled-components';

import section from 'assets/section.png';

export const LayoutWrapper = styled.div`
  padding: 0 25%;
  background-image: url(${section});
  background-repeat: no-repeat;
  height: calc(100vh - 107px);
  background-size: cover;
  background-position-x: center;
`;
