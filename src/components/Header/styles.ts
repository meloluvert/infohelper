import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const Header = styled.header`
  background-color: ${colors.secondary};
  display:flex;
  height:${vars.header_height};
  position:fixed;
  top:0;
  align-items:center;
  width:100%;
  justify-content:space-evenly;
  z-index:3;
  nav{
    height:100%;
    width:50%;
    z-index:4;
  }
  div.logo{
    width:50%;
    display:flex;
    padding: 1rem;
    
  }
  div.logo img{
    
    height:80%;
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
    width: calc(100%/5);
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
  }
  nav ul a{
    text-decoration:none;
    color: ${colors.black};
    text-align:center;
    width:100%;
    display:inline-block;
    font-family: monospace;
    font-size:1.2rem;
  }
  

.ButtonSignOut{
  width:100%;
  height:30%;
  background:none;
}

  @media(max-width:800px) {

/*menu vai desaparecer*/
nav {
    position:fixed;
    width: 100%;
    justify-content: right;
    z-index:-9;
    height:10rem;
    top:${vars.header_height};


}

nav ul {
    flex-wrap: wrap;
    
    background-color: #4c4c4cca ;
    height: 100%;
    width: 100%;

}
nav ul li {
        width: 100%;
        text-align: center;
        display: block;
        height: calc(100%/5);
        border-top: 0.1px solid ${colors.secondaryLight};
        display: flex;
        backdrop-filter:blur(5px);
    }

/*Esconderemos a ul*/
.hidden ul {
    position: absolute;

}
.hidden {
       display:none; 
        backdrop-filter: blur(5px);
    }
  nav{
    display:block;
  }
}
@media(max-width:1500px){
      nav ul a{
        font-size:1.2rem;
      }
  }
  @media (max-width: 1000px) {
    div.logo img{
      height:auto;
      width:60%;
    }
  }
  @media (max-width: 600px){
    div.logo img{
      width:100%;
    }
    div.logo{
      width:60%;
    }
  }

`