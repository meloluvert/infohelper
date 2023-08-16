import * as S from "./styles"
export function Menu() {
    return (
        <S.Div>
            <input type="checkbox" name="" id="checkmenu" />
            <label htmlFor="checkmenu" id="labelmenu">
                <div className="menuburguer">
                    <span className="hamburguer" id="hamburguer1"></span>
                    <span className="hamburguer" id="hamburguer2"></span>
                    <span className="hamburguer" id="hamburguer3"></span>
                </div>
            </label>
        </S.Div>
    )
}