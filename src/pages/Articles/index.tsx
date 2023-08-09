import {ComponentArticle} from "../../components"
import { article_json } from "../../services/articles"
export function Articles(){
    return (
    <>
        <h1>Artigos</h1>
        {article_json.map( card =>(

            <ComponentArticle title={card.title} subtitle={card.subtitle} image_adress={card.image_adress}/>
        )

        )}
        
        </>
    )
}