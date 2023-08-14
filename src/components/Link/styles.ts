import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const CardLink = styled.a`
    
    
    margin:0.3rem 0;
    color: white;
    display:flex;
    justify-content:flex-end;
    background-color: ${colors.secondary};
    width:90%;
    padding:0.4rem;
    transition: transform ${vars.time_hover};
    
    :hover{
        transform: scale(1.01);
    }
    span{
        flex-grow:1;
        margin-left:0;
    }
`