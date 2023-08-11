import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const Header = styled.header`
  background-color: ${colors.secondary};
  display:flex;
  height:4rem;
  align-items:center;
  width:100%;
 nav{
    width: 50%;
    margin-left:auto;
  }
  img{
    height:100%;
  }
  nav ul{
    width: 100%;
    list-style-type:none;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.black}
  }
  
`