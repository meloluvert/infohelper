import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const Article = styled.article`
    width:30%;
    height: ${vars.height_card};
    transition: transform ${vars.time_hover};
    :hover div .card p{
        color: ${colors.white};
    }
    :hover{
        transform: scale(1.01);
    }
    :hover div{
    }
    div{
        width:100%;
        height: 100%;
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    }
    div .card{
        
        background-color: ${colors.secondary};
        height: 20px;
        text-align: justify;
        position: relative;
        bottom: calc(20px - ${vars.height_card});
        transition:height calc(${vars.time_hover}),bottom ${vars.time_hover};
        overflow-y: scroll;
        overflow: hidden;
        backdrop-filter: blur(15px);
    }
    div:hover .card {
        height: calc(5rem + 1px);
        bottom: calc(4.9rem - ${vars.height_card});

    }
    div:hover .card p{
        color: ${colors.white};
    }
    div .card p{
        color: ${colors.secondary} 
    }
    
`
