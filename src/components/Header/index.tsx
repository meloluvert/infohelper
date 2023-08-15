import * as S from "./styles.ts"
import logo from "../../assets/InfoHelper.png"
export function Header() {
    return (
        <S.Header>
            <div className="logo">
            <img src={logo} alt="Logo da InfoHelper" />
            </div>
            <nav>
                <ul>
                    <li><a href="/artigos">Artigos</a></li> 
                    <li><a href="/ferramentas">Ferramentas</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </nav>

        </S.Header >
    )
}