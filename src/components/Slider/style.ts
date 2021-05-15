import styled from 'styled-components';
import Slider from 'react-slick';
import left from 'assets/left.png';
import right from 'assets/right.png';

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SliderMovies = styled(Slider)`
  display: flex;
  margin-top: 40px;
  > button:first-child {
    left: -70px;
    top: 35%;
    &::before {
      content: url(${left});
    }
  }
  > button:last-child {
    right: -40px;
    top: 35%;
    &::before {
      content: url(${right});
    }
  }
  @media (max-width: 768px) {
    div {
      div {
        display: flex !important;
        justify-content: center;
      }
    }
    > button:first-child {
      left: 20px;
    }
    > button:last-child {
      right: 25px;
    }
  }
`;

interface ICardSliderProps {
  imageUrl: string;
}
export const CardSlider = styled.div`
  width: 218.53px;

  > div:first-child {
    width: 218.53px;
    background-image: url(${({ imageUrl }: ICardSliderProps) => imageUrl});
    height: 328.27px;
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
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    > div {
      max-width: 100%;
      h2 {
        font-weight: 500;
        font-size: 22px;
        color: #eaeaea;
      }
    }
    span {
      margin-bottom: 6px;
      font-weight: 300;
      color: #fe3189;
      font-size: 16px;
    }
    span:last-child {
      display: flex;
      align-items: center;
      color: #eaeaea;
      svg {
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
