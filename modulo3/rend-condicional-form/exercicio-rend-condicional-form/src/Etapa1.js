import React from "react";
import styled from "styled-components";

const DadosGerais = styled.div `
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



function Etapa1() {
    return (
      <DadosGerais>
        <p>ETAPA 1: Dados gerais</p>
        <label>1. Nome:</label>
        <input value=""/>
  
        <label>2. Idade:</label>
        <input value=""/>
  
        <label>3. Email:</label>
        <input value=""/>
  
        <label>4. Qual o grau de escolaridade:</label>
        <input type="text" list="escolaridade" placeholder='Selecione a escolaridade.'/>
          <datalist id="escolaridade">
            <option value="Ensino Médio Incompleto.">Ensino Médio Incompleto.</option>
            <option value="Ensino Médio Completo.">Ensino Médio Completo.</option>
            <option value="Ensino Superior Incompleto.">Ensino Superior Incompleto.</option>
            <option value="Ensino Superior Completo.">Ensino Superior Completo.</option>
          </datalist>
      </DadosGerais>
    );
  }

export default Etapa1;
