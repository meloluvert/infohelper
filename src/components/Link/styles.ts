import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const CardLink = styled.a`
    text-decoration:none;
    
    margin:0.3rem 0;
    width:90%;
    div{
    background-color: ${colors.secondary};
    padding:0.55rem;
    transition: transform ${vars.time_hover};

    border-radius: ${vars.border_inputs};
    
    color: white;
    display:flex;
    justify-content:flex-end;
    }
    div:hover{
        transform: scale(1.01);
    }
    div a{
        padding:0 0.3rem;
    }
    span{
        flex-grow:1;
        margin-left:0;
    }
`