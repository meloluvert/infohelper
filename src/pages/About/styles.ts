import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"

export const Section = styled.section`
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
    width:80%;

    height:45rem;
    section{
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }

:nth-child(1){
    grid-area: 1 / 1 / 4 / 2;
}
:nth-child(2){
    grid-area: 1 / 2 / 3 / 3; 
}
:nth-child(3) { grid-area: 3 / 2 / 4 / 3; }
`   
export const Form = styled.form`
    background-color: ${colors.secondary};
    width:70%;
    height:70%;
    display: flex;
    flex-wrap:wrap;
    align-content:space-evenly;
    justify-content:space-evenly;
    font-size:1.4rem;
    input,textarea, select{
        padding:0.7rem;
        border-radius:${vars.border_inputs};

    }
    label{
        background-color: ${colors.third};
        text-align:left;
        display:inline-block;
        border-radius: ${vars.border_inputs}
    }
    div{
        display:flex;
        flex-direction:column;
        width:45%;
        padding:3%;
        

    }
    
`