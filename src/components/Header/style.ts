/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25%;
  background: #212125;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  min-height: 107px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 26px;
    line-height: 39px;
  }
  span {
    font-weight: bold;
    font-size: 26px;
    margin-left: 5px;
    background: linear-gradient(
        288.57deg,
        rgba(254, 49, 137, 0.5) 5.7%,
        rgba(255, 0, 110, 0.5) 70.08%
      ),
      linear-gradient(0deg, #ff559e, #ff559e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

interface IHeaderNavProps {
  openSearch: boolean;
}

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 35%;
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      a{
        color: #eaeaea;
      }
      button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
        font-size: 30px;
        svg {
          * {
            color: ${({ openSearch }: IHeaderNavProps) =>
    openSearch ? '#fe3189' : '#eaeaea'};
          }
        }
      }
    }
  }
`;
