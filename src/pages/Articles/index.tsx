import {ComponentArticle} from "../../components"
import { article_json } from "../../services/articles"
import * as S from "./styles"
export function Articles(){
    return (
<>
        <h2>Artigos</h2>
    <S.Section>
        {article_json.map( card =>(

            <ComponentArticle title={card.title} subtitle={card.subtitle} image_adress={card.image_adress}/>
        )

        )}
        
        </S.Section>
        </>
    )
}