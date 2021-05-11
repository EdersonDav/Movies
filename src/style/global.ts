import { createGlobalStyle } from 'styled-components';
import section from 'assets/section.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #eaeaea;
  }
  body{
    background: #1B1B1F;
    background-image: url(${section});
    background-repeat: no-repeat;
  }
  button{
    cursor: pointer;
  }
  h1{
    font-weight: 500;
  }
`;
