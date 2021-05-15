import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeTitles = styled.div`
  margin-top: 87px;
  display: flex;
  align-items: center;
  > span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fe3189;
    margin-right: 13px;
  }
  h2 {
    font-size: 22px;
    display: flex;
    align-items: center;
    color: #eaeaea;
    font-weight: 100;
    strong {
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 120px;
    h2 {
      font-size: 16.6667px;
    }
  }
`;

export const HomeCatalogWrapper = styled.div`
  display: flex;
  margin-top: 130px;
  flex-direction: column;
  position: relative;
  width: 200%;
  margin-left: -50%;
  > div {
    padding: 0 25%;
  }
  > div:first-child {
    margin-top: 3px;
    height: 107px;
    width: 100%;
    background: #212125;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  }
  hr {
    position: absolute;
    width: 100%;
    height: 3px;
    border: none;
    background: linear-gradient(
        288.57deg,
        rgba(255, 85, 158, 0.5) 5.7%,
        rgba(254, 49, 137, 0.5) 70.08%
      ),
      #ff559e;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 44px 0 0;
    width: 100%;
    background: #212125;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
    > div:first-child {
      height: 63px;
    }
    > div {
      padding: 0 24px;
    }
    hr {
      display: none;
    }
  }
`;
