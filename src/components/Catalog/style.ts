import styled, { css } from 'styled-components';

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 161px;
    height: 44.86px;
    border: none;
    background: linear-gradient(180deg, #fe3189 0%, #fe3189 100%), #fe3189;
    mix-blend-mode: normal;
    border-radius: 3.20398px;
    filter: drop-shadow(0px 0px 6px #ff0772);
    font-weight: 600;
    font-size: 14.4179px;
    display: flex;
    align-items: center;
    color: #eaeaea;
    justify-content: center;
    margin-left: 25px;
  }
  > button:last-child {
    margin: 0 auto 196px;
  }
`;
interface CatalogButtonsProps {
  popularity: boolean;
}
export const CatalogButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 45px;
  > div {
    display: flex;
    align-items: center;
  }
  ${({ popularity }: CatalogButtonsProps) =>
    !popularity
      ? css`
          button {
            background: linear-gradient(180deg, #212125 0%, #2e2e35 100%),
              #212125;
            border: 2px solid #2e2d31;
            filter: none;
          }
        `
      : null}
`;

export const SelectDiv = styled.div`
  min-width: 161px;
  max-width: 161px;
  height: 44.86px;
  position: relative;
  display: flex;
  align-items: center;
  select {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #212125 0%, #2e2e35 100%), #212125;
    border: 2px solid #2e2d31;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14.4179px;
    display: flex;
    align-items: center;
    color: #eaeaea;
    justify-content: center;
    appearance: none;
    cursor: pointer;
    text-align-last: center;
    padding-left: 20px;
  }
  svg {
    position: absolute;
    left: 20px;
    top: 35%;
  }
`;

export const CatalogMoviesWrapper = styled.div`
  display: flex;
  padding: 44px 0;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

interface ICardProps {
  imageUrl: string;
  direction: string;
}
export const Card = styled.div`
  margin-top: 15px;
  width: ${({ direction }: ICardProps) => (direction === 'grid' ? 45 : 100)}%;
  height: 232px;
  display: flex;
  margin-bottom: 38px;
  > div:first-child {
    min-width: 157px;
    min-height: 232px;
    background-image: url(${({ imageUrl }: ICardProps) => imageUrl});
    background-repeat: no-repeat;
    border-radius: 4px;
    background-size: cover;
    > a {
      align-items: center;
      justify-content: center;
      background: rgba(254, 49, 137, 0.3);
      height: 100%;
      width: 100%;
      box-shadow: 0px 0px 25px -1px rgba(254, 49, 137, 0.37);
      display: none;
    }
    &:hover {
      > a {
        display: flex;
      }
    }
  }

  > div:last-child {
    margin-left: 27px;
    h2 {
      font-size: 21.1549px;
      color: #eaeaea;
    }
    p {
      margin-top: 5px;
      font-weight: 300;
      font-size: 15.3854px;
      line-height: 23px;
      color: #fe3189;
    }
    span {
      margin-top: 12px;
      font-size: 15.3854px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
    p:last-child {
      margin-top: 12px;
      height: 119.24px;
      font-weight: 300;
      font-size: 12.5006px;
      line-height: 19px;
      color: #9f9fa0;
      word-wrap: break-word;
    }
  }
`;
