import React, { useState } from "react";
import * as S from "./styles";

export function Menu({ onCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(!isChecked); // Chamando a função de callback no Header
  };
  
  return (
    <S.Div>
      <input
        type="checkbox"
        name=""
        id="checkmenu"
        onChange={handleCheckboxChange}
      />
      {/* Se esse input acima estiver checado, retorne true para os isChecked */}
      <label htmlFor="checkmenu" id="labelmenu">
        <div className="menuburguer">
          <span className="hamburguer" id="hamburguer1"></span>
          <span className="hamburguer" id="hamburguer2"></span>
          <span className="hamburguer" id="hamburguer3"></span>
        </div>
      </label>
    </S.Div>
  );
}
