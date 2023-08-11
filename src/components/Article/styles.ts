import styled from "styled-components"
import { colors, sizes } from "../../styles/GlobalStyle"
export const Article = styled.article`
    width:30%;
    height: ${sizes.height_card};
    :hover div .card p{
        color: ${colors.white};
    }
    div{
        width:100%;
        height: 100%;
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
    }
    div .card{
        background-color: ${colors.primary};
    height: 20px;
    text-align: justify;
    position: relative;
    bottom: calc(20px - ${sizes.height_card});
    transition:height var(--time-trasnsition),bottom var(--time-trasnsition);
    overflow-y: scroll;
    overflow: hidden;
    }
    div:hover .card {
        height: calc(5rem);
        bottom: calc(5rem - ${sizes.height_card});

    }
    div:hover .card p{
        color: ${colors.white};
    }
    div .card p{
        color: ${colors.primary} 
    }
    
`
