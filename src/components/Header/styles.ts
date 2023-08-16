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
  



  @media(max-width:800px) {

/*menu vai desaparecer*/
nav {
    /* display: none; */
    position:fixed;
    width: 100%;
    justify-content: right;
    background-color: transparent;
    z-index:3;
    height:10rem;
    top:${vars.header_height};


}

nav ul {
    flex-wrap: wrap;
    background-color: ${colors.secondaryLight};
    
    height: 100%;
    width: 100%;

}
nav ul li {
        width: 100%;
        text-align: center;
        display: block;
        height: calc(100%/3);
        border-top: 0.1px solid ${colors.secondaryLight};
        display: flex;
        background-color:rgba(255,255,255,0.1);
    }

/*Esconderemos a ul*/
nav ul {
    position: absolute;
    right: -100%;
    animation: appear;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    transition: rigth 3s;
    transition-timing-function: ease-in;

}
 /*para que a ul, escondida à direita, apareça*/
 @keyframes appear {
        100% {
            right: 0;
        }
    }


/*para que a ul, escondida à direita, apareça*/
@keyframes appear {
    100% {
        right: 0;
    }
}



`