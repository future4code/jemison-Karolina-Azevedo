import React from "react";
import styled from "styled-components";

const Mensagem = styled.div `
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

function Final() {
    return (
      <Mensagem>
          <p>O Formulário Acabou!</p>
          <p>Muito Obrigada por participar, entraremos em contato!</p>
      </Mensagem>
    );
  }
  

export default Final;
