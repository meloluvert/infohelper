

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
               <p>{title}</p>
               <p> {subtitle}</p>
         </div>
      </S.Article>

   )

}
