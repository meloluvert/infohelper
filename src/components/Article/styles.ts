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
    div{
        width:100%;
        height: 100%;
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    }
    .blur{
        display:block;
        width: 100%;
        height:100%;
        position:relative;
        bottom:0px;
        backdrop-filter:blur(2px);

        z-index:-1;
    }
    div .card{
        z-index:3;
        
        background-color: ${colors.secondary};
        height: 20px;
        text-align: justify;
        position: relative;
        bottom: calc(20px - ${vars.height_card} + ${vars.height_card});
        transition:height calc(${vars.time_hover}),bottom ${vars.time_hover};
        overflow-y: scroll;
        overflow: hidden;
    }
    .card p:nth-child(1){
        text-transform:uppercase;
    }
    div:hover .card {
        height: calc(5rem + 1px);
        bottom: calc(4.9rem - ${vars.height_card} + ${vars.height_card});
        transform: scale(1.01);
    }
    div:hover .card p{
        color: ${colors.white};
    }
    div .card p{
        color: ${colors.secondary} 
    }
    @media(max-width:800px) {
        width:35%;
        height: calc( ${vars.height_card} - 1rem);
        margin:2rem 0;

        transform: scale(1.01);
        div .card{
            height: calc(5rem);
            bottom: calc(4.9rem - ${vars.height_card} + ${vars.height_card});
        }
        div .card p{

            color:${colors.white};
        }
        .blur{
            backdrop-filter:blur(1px);
            z-index:0;
        }
        

    }
    @media(max-width:600px) {
        width:40%;
    }
    @media(max-width:400px) {
        width:90%;
        margin:1rem 0;
    
    }    
`
