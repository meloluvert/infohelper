import * as S from "./styles.ts";
import logo from "../../assets/InfoHelper.png";
import { ComponentMenu } from "../index.tsx";
import { useState, useContext } from "react";

//import { useAuth } from "../../hooks/authHook";
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { AuthContext } from "../../contexts/authContext";

export function Header() {
  const [isMenuChecked, setMenuChecked] = useState(false);

  const handleMenuCheckboxChange = (isChecked: boolean | ((prevState: boolean) => boolean)) => {
    setMenuChecked(isChecked);
  };
//parte adicionada dps
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }

    return (
        <S.Header>
            <div className="logo">
            <img src={logo} alt="Logo da InfoHelper" />
            </div>
            <ComponentMenu onCheckboxChange={handleMenuCheckboxChange} />
      <nav className={isMenuChecked ? "" : "hidden"}>
                <ul>
                    <li><a href="/artigos">Artigos</a></li> 
                    <li><a href="/ferramentas">Ferramentas</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                {
          user ? (
            <>
              <li>
                <Link to="/adm/message">Mensagem</Link>
              </li>
              <li>
                <button onClick={logout} className="ButtonSignOut">{user.name} <GrLogout /></button>
              </li>
              </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>

</>
          )
        }

        </ul>
            </nav>

        </S.Header >
    )
}