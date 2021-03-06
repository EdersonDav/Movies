import styled from 'styled-components';

interface ICardProps {
  imageUrl: string;
}
export const MovieDetail = styled.div`
  margin-top: 122px;
  width: 100%;
  height: 608px;
  display: flex;
  margin-bottom: 38px;
  align-items: center;
  > div:first-child {
    min-width: 334px;
    width: 334px;
    height: 494px;
    background-image: url(${({ imageUrl }: ICardProps) => imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div:last-child {
    margin-left: 64px;
    h2 {
      font-weight: bold;
      font-size: 60px;
      line-height: 68px;
      align-items: center;
    }
    > div {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-weight: 300;
        font-size: 24px;
        line-height: 36px;
        display: flex;
        align-items: center;
        color: #fe3189;
      }
      span {
        margin-top: 12px;
        font-size: 26.4527px;
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
        }
      }
    }

    h3 {
      margin-top: 60px;
      font-weight: 600;
      font-size: 24px;
      line-height: 140.5%;
      color: #eaeaea;
    }

    p:last-child {
      margin-top: 30px;
      font-size: 22px;
      line-height: 140.5%;
      color: #757575;
      word-wrap: break-word;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    height: auto;
    > div:first-child {
      margin-top: 95px;
      min-width: 318px;
      min-height: 470px;
      margin-bottom: 30px;
      background-image: url(${({ imageUrl }: ICardProps) => imageUrl});
      background-repeat: no-repeat;
      background-size: cover;
    }
    > div:last-child {
      display: flex;
      padding: 0 20px;
      margin-left: 0;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        font-weight: bold;
        font-size: 27px;
        line-height: 68px;
        align-items: center;
      }
      > div {
        width: 100%;
        margin-top: 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-weight: 300;
          font-size: 16px;
          line-height: 36px;
          display: flex;
          align-items: center;
          color: #fe3189;
        }
        span {
          margin-top: 12px;
          font-size: 18.6667px;
          display: flex;
          align-items: center;
          svg {
            margin-right: 10px;
          }
        }
      }

      h3 {
        margin-top: 39px;
        font-size: 20px;
        line-height: 140.5%;
        color: #eaeaea;
      }

      p:last-child {
        margin-top: 30px;
        font-size: 16px;
        line-height: 140.5%;
        color: #757575;
        word-wrap: break-word;
      }
    }
  }
`;

export const Trailer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    width: 100%;
    padding-bottom: 15px;
    font-weight: 600;
    font-size: 29.1064px;
    color: #eaeaea;
    border-bottom: 2px solid #fe3189;
  }
  a {
    margin: 100px auto 400px;
    font-weight: 600;
    font-size: 14.4179px;
    color: #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 161px;
    height: 44.86px;
    left: 519px;
    top: 1506px;
    background: linear-gradient(
        288.57deg,
        rgba(254, 49, 137, 0.5) 5.7%,
        rgba(255, 0, 110, 0.5) 70.08%
      ),
      #ff559e;
    mix-blend-mode: normal;
    border-radius: 3.20398px;
    filter: drop-shadow(0px 0px 6px #ff0772);
  }
  iframe {
    margin-top: 50px;
    width: 100%;
    height: 579px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    h2 {
      width: 162.56px;
      margin-left: 20.59px;
      padding-bottom: 5px;
      font-size: 20px;
      border-bottom: 1px solid #fe3189;
    }
    iframe {
      margin-top: 28px;
      width: 100%;
      height: 200px;
    }
    a {
      margin: 49px auto 135px;
    }
  }
`;
