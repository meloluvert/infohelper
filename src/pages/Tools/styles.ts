import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:45%;
    h2{
        color:${colors.white};
        text-align:left;
        width:90%;
    }
`
export const DivGlobal  = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-content:space-evenly;
    flex-wrap:wrap;
    width: 90%;
    
    height:45rem;
    max-width:120rem
`