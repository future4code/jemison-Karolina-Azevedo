import { useState } from "react";
import styled from "styled-components";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 3vh;
`

function App() {
  const [etapa, setEtapa] = useState (1);

  const handleRenderizarEtapa = () => {
      setEtapa()
  }

  const renderizarEtapa = () => {
    switch(etapa){
      case 1:
        return <Etapa1/>;
        break;

      case 2:
        return <Etapa2/>;
        break;

      case 3:
        return <Etapa3/>;
        break;

      case 4:
        return <Final/>;
        break;

      default:
        break;
    }

  }

  return (
    <Container>
      <button onClick={handleRenderizarEtapa}>Próxima etapa</button>
      {renderizarEtapa}
    </Container>
  );
}

export default App;
