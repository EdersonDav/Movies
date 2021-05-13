import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    top: -500px;
    display: none;
  }
  90%{
    display: none;
  }
  100% {
    top:0
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 108px;
  height: calc(100vh - (107px + 112px));
  background: #18181cf2;
  width: 100%;
  z-index: 2;
  overflow-y: hidden;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 25% 30px;
  height: auto;
  background: #212125;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  animation: ${animation} 0.5s linear;
`;

export const InputDiv = styled.div`
  margin: 35px 0;
  input {
    background: transparent;
    border: none;
    border-bottom: 2px solid #fe3189;
    width: 100%;
    padding: 15px 5px;
    font-weight: 500;
    font-size: 30px;
    color: #eaeaea;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  justify-content: space-around;
  overflow-y: scroll;
  max-height: 50vh;
  &::-webkit-scrollbar {
    width: 6px;
    background: #212125;
  }
`;

interface ICardProps {
  imageUrl: string;
}
export const Card = styled.div`
  margin-top: 15px;
  width: 302px;
  height: 191px;
  background: #252529;
  border: 1px solid #313136;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  align-items: center;
  > div:first-child {
    border-radius: 5px;
    min-width: 98px;
    height: 147px;
    overflow: hidden;
    background-image: url(${({ imageUrl }: ICardProps) => imageUrl});
    background-repeat: no-repeat;
    background-size: contain;
  }

  > div:last-child {
    margin-left: 20px;
    h2 {
      font-weight: 500;
      font-size: 18px;
    }
    p {
      margin-top: 5px;
      font-weight: 300;
      font-size: 16px;
      color: #fe3189;
    }
    span {
      margin-top: 5px;
      font-size: 16px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }
`;
