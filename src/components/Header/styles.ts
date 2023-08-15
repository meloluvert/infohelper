import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const Header = styled.header`
  background-color: ${colors.secondary};
  display:flex;
  height:4rem;
  align-items:center;
  width:100%;
  justify-content:space-evenly;
 nav{
    height:100%;
    width:50%;
  }
  div.logo{
    width:50%;
    display:flex;
    padding: 1rem;
    
  }
  div.logo img{
    
    width:50%;
    display:block;
    
  }
  nav ul{
    width: 100%;
    list-style-type:none;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:100%;
  }
  nav ul li{
    width: calc(100%/3);
    text-align:center;
    height:100%;
    transition: background-color ${vars.time_hover};
    display:flex;
    align-items:center;
  }
  nav ul li:hover {
    background-color: ${colors.secondaryLight};
  }
  nav ul li:hover a{
    text-decoration:underline;
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.black};
    text-align:center;
    width:100%;
    display:inline-block;
    font-family: monospace;
    font-size:2rem;
  }
  
`