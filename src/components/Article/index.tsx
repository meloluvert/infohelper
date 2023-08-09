 import {article_json} from "../../services/articles"
//  import * as S from "./styles";
 export interface ICard{
    title: string
    subtitle: string
    image_adress: string
 }

 export const Article = ({title, subtitle, image_adress}: ICard) => {
    return (
    <>
        <h3>{title}</h3>
        <img src={image_adress} alt="" />
    </>
    )
 }