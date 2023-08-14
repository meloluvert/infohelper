import {ImFirefox} from "react-icons/im"
import {AiFillChrome} from "react-icons/ai"
import {BsArrowUpRight} from "react-icons/bs"
import { colors } from "../../styles/GlobalStyle"
import * as S from "./styles"
interface LinkProps {   
    name: string;
    link_chrome?: string;
    link_firefox?: string;
    link?: string;
    description?: string;
}

export function Link({ name, link_chrome, link_firefox, link, description }: LinkProps) {
    return (
        <S.CardLink  title={description} href={link}>
            <span> {name} </span>
            {link_chrome && <a target="_blank" href={link_chrome}><AiFillChrome color={colors.white} /></a>}
            {link_firefox && <a target="_blank" href={link_firefox}><ImFirefox color={colors.white}/></a>}
            {link && <a target="_blank" href={link}><BsArrowUpRight color={colors.white}/></a>}
        </S.CardLink>
    );
}