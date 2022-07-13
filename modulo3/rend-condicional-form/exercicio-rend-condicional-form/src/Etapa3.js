import React from "react";
import styled from "styled-components";

const SobreCurso = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    border: solid 0.5vh;
    border-radius: 2vh;
    padding-bottom: 5vh;
    p{
        font-size: x-large;
        font-weight: bold;
    }
`

function Etapa3() {
    return (
      <SobreCurso>
          <p>ETAPA 3 - Informações Gerais de Ensino</p>
          <label>1. Por que você não terminou um curso de graduação?</label>
          <input value=""/>
          <label>4. Você fez algum curso complementar?</label>
          <input type="text" list="curso" placeholder='Selecione uma opção.'/>
              <datalist id="curso">
                  <option value="Curso técnico.">Curso técnico.</option>
                  <option value="Cursos de inglês.">Cursos de inglês.</option>
                  <option value="Não fiz curso complementar.">Não fiz curso complementar.</option>
              </datalist>
      </SobreCurso>
    );
  }

export default Etapa3;
