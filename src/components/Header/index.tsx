import * as S from "./styles.ts";
import logo from "../../assets/InfoHelper.png";
import { ComponentMenu } from "../index.tsx";
import React, { useState } from "react";

export function Header() {
  const [isMenuChecked, setMenuChecked] = useState(false);

  const handleMenuCheckboxChange = (isChecked) => {
    setMenuChecked(isChecked);
  };

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
                </ul>

            </nav>

        </S.Header >
    )
}