import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"

export const Div = styled.div`

width:13px;
/* Elelmentos do menu */
    #labelmenu{
        height:20px;
        display: flex;
        align-items: center;
        justify-content: right;
        width: 100%;
    }
    #labelmenu .menuburguer{
        height: 100%;
        display: flex;
        margin: auto;
        flex-wrap: wrap;
        width:100%;
    }
    input#checkmenu{
         display:none;
    }
    
    /*Animação*/
    /*Quando apertarmos o label, o menu vai aparecer*/

    /*para que rode quando clicar*/
    input#checkmenu:checked~label .menuburguer {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        rotate: 45deg;
    }

    input#checkmenu:checked~label #hamburguer1::before {
        position: absolute;
        rotate: -90deg;
    }


    .hamburguer,
    .hamburguer::before {
        display: block;
        height: 5%;
        background-color: #000;
        width: 100%;
        transition: rotate 1s;

    }

    .hamburguer::before {
        display: block;
        content: '';
    }
    @media (min-width:800px) {
    #labelmenu{
        display:none;
    }
    
}


    /* Falta  */
`