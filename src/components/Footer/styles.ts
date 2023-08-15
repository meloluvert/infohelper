import  styled  from "styled-components";
import { colors } from "../../styles/GlobalStyle";
export const Footer = styled.footer`
    height:2rem;
    background-color: ${colors.secondary};
    display:flex;
    align-items:center;

    font-size:1rem;
    padding:0.3rem;
    a{
        text-decoration:none;
        color:${colors.white};

    }
`