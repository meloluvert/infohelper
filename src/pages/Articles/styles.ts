import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const Section = styled.section`
    display:flex;
    align-items:center;
    align-content:space-evenly;
    flex-wrap:wrap;
    width:80%;
    max-width: 50rem;
    justify-content:space-evenly;
    height:40rem;
    @media(max-width:1000px) {
        width:100%;
        min-height:100%;
    }
    @media(max-width:800px) {
    height:auto;
    }
    
`