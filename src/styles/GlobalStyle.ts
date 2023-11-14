import styled, { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'
export const colors = {
  primary: "#1B1C1E",
  secondary: "#393A3B",
  secondaryLight: "#4c4c4c",
  third: "#78B9EB",
  black: "#000",
  white: "#fff"
}
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  h1,h2,h3,h4{
    color: ${colors.white};
  }
  h1{
    font-size:3rem;
    font-family: 'Kanit', sans-serif;
  }
  h2{
    font-family: 'Noto Sans JP', sans-serif;
  }
  *::selection{
    background:${colors.third};
    color:white;
  }
  p{
    font-family: 'Roboto', sans-serif;
  }

`

{/*variáveis*/}
export const vars = {
  time_hover: "0.5s",
  height_card:"15rem",
  border_inputs: "5px",
  header_height: "4rem"
}