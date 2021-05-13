import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background: #1B1B1F;
    color: #eaeaea;
  }
  button{
    cursor: pointer;
  }
  h1{
    font-weight: 500;
  }
`;
