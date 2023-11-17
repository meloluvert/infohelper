import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"

export const Section = styled.section`
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
    width:70%;

    height:40rem;
    section{
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }

    /* Form */
:nth-child(1){
    grid-area: 1 / 1 / 6 / 2;
}
/* Sobre */
:nth-child(2){
    grid-area: 1 / 2 / 5 / 3; 
}
/* Icons */
:nth-child(3) { grid-area: 5 / 2 / 6 / 3; }

div{

    background-color:${colors.secondary};
    border-radius:${vars.border_inputs};
}
div p{
        text-indent: 2rem;
        color: ${colors.white};
    }
    .social_media{
        font-size: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height:5rem;
        color:${colors.white};
    }
    .social_media svg:hover{
        color:${colors.third};
    }
    section.who_we_are{
        flex-direction:row;
    }
    section.who_we_are h2{
        align-self:flex-end;
    }
    section.who_we_are div{
        width:80%;
        display:flex;
        flex-direction:column;
        padding: 0.5rem;
    }
    section.who_we_are div p{
        padding: 0.5rem;
    }
    @media (max-width: 1600px) {
        width:90%;
        
        
  }
  @media (max-width: 1200px){
    display:flex;
    flex-direction:column;
    height: auto;
    section h2{
        width:100%;
        text-align:center;
        padding: 1rem 0;
    }
    section{
        margin: 1rem 0;
    }
  }
  @media(max-width: 600px){
    width:90%;  
    section.who_we_are div{
        width: auto;
    }
  }

`
export const Form = styled.form`
    background-color: ${colors.secondary};
    width:70%;
    display: flex;
    flex-wrap:wrap;
    align-content:space-evenly;
    justify-content:space-evenly;
    font-size:1rem;
    border-radius:${vars.border_inputs};
    input,textarea, select{
        padding:0.3rem;
        border-radius:${vars.border_inputs};
        transition: background-color ${vars.time_hover};
        resize:none;

    }
    textarea{
        max-height:90%;
        max-height:100%;
    }
    input:hover, textarea:hover, select:hover{
        background-color:${colors.secondaryLight};
        color:white;
    }
    label span{
        background-color: ${colors.third};
        text-align:left;
        display:inline-block;
        border-radius: ${vars.border_inputs};
        padding: 0.2rem;
        margin: 0.3rem 0;
    }
    div.mensagem{
        width:90%;
    }
    div.termos{
        display:block;
        width:90%;

        font-size:1rem;

    }
    div.termos input{
        margin:0 0.3rem;
    }
    div.buttons{
        width:90%;
        flex-direction: row;
        justify-items:center;
        justify-items:flex-end;
        justify-content: space-around;
    }
    
    div{
        display:flex;
        flex-direction:column;
        width:45%;
        padding:3%;
        

    }
    

    button{
        height:2rem;
        width:3rem;
        background-color: ${colors.third};
        color: ${colors.black};
        border-radius: ${vars.border_inputs};
    }
    @media(max-width: 600px){
    width:auto; 
    
  }
    
`