import {ComponentArticle} from "../../components"
import { article_json } from "../../services/articles"
export function Articles(){
    return (<>
        <h1>Artigos</h1>
        <ComponentArticle title={article_json[0].title} subtitle={article_json[0].subtitle} image_adress={article_json[0].image_adress}/>
        </>
    )
}