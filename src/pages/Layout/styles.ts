import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"
export const Main = styled.main`
  min-height: calc(100vh - 6rem);
  background-color: ${colors.primary};
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  margin-top:${vars.header_height};
`