/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 5;
`;

export const HeaderWrapper = styled.div`
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25%;
  background: #212125;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  min-height: 107px;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    h1 {
      font-size: 20.9444px;
  }
  span {
    font-size: 20.9444px;
  }
  }
`;

interface IHeaderNavProps {
  openSearch: boolean;
  scrollIn?: string;
}

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      font-size: 16px;
      line-height: 24px;
      width: 112px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      ${({ scrollIn }: IHeaderNavProps) => scrollIn === 'home' ?
    css`
        &:first-child{
          border-bottom: 2px solid #FE3189;
        }
      `:
    css`
        &:nth-child(2){
          border-bottom: 2px solid #FE3189;
        }
      `
  };
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


export const HeaderMobileWrapper = styled.div`
  display: none;
  max-width:100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  min-height: 55px;
  background: #212125;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
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
  @media (max-width: 768px) {
    display: flex;
  }
`
