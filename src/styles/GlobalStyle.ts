import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  
`
export const colors = {
  primary: "#1B1C1E",
  secondary: "#393A3B",
  third: "#78B9EB",
  black: "#000",
  white: "#fff"
}
{/*variáveis*/}
export const vars = {
  time_hover: "0.5s",
  height_card:"15rem",
  border_inputs: "5px"
}