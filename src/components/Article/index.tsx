

import * as S from "./styles.ts";
export interface ICard {
   title: string
   subtitle: string
   image_adress: string
}

export const Article = ({ title, subtitle, image_adress }: ICard) => {
   return (
      <S.Article>
         <div style={{backgroundImage: `url(${image_adress})`}}>
            <div className="blur"></div>
            <div className="card">
               <p>{title}</p>
               <p> {subtitle}</p>
            </div>
         </div>
      </S.Article>

   )

}
