import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import { vars } from "../../styles/GlobalStyle"
export const Section = styled.section`
    form label{
        background-color: ${colors.third};
        padding: 0.3%;
        border-radius:${vars.border_inputs};
    }
    input,textarea, select{
        padding:0.3rem;
        border-radius:${vars.border_inputs};
        transition: background-color ${vars.time_hover};
        resize:none;

    }
    button{
        height:2rem;
        width:3rem;
        background-color: ${colors.third};
        color: ${colors.black};
        border-radius: ${vars.border_inputs};
    }
    *{
        margin: 4px 0;
    }
    svg{
        color: ${colors.white}
    }
`