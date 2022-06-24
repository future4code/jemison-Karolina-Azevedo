import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from "./imagens/fotoPerfil.jpg"
import ufjf from "./imagens/ufjf.jpg"
import estacio from "./imagens/estacio.png"
import labenu from "./imagens/labenu.png"
import CardPequeno from './components/CardPequeno/CardPequeno';
import caixaemail from './imagens/caixaemail.jpg';
import localizacao from './imagens/localizacao.jpg';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil}
          nome="Karolina" 
          descricao="Oi, eu sou a Karolina. Tenho 33 anos. Sou mineira de Juiz de Fora, mas atualmente moro na capital do Rio de Janeiro. Estou muito empolgada com as novas descobertas do mundo da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
        imagem= {caixaemail}
        dado= "E-mail: fake@gmail.com.br"
        />

        <CardPequeno
        imagem= {localizacao}
        dado= "Endereço: Rua Labenu, 000"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ufjf} 
          nome="Cirurgiã-Dentista" 
          descricao="Formada na Faculdade de Odontologia da Universidade Federal de Juiz de Fora. Conclusão 2011" 
        />
        
        <CardGrande 
          imagem={estacio} 
          nome="Cientista da Computação" 
          descricao="Faculdade de Ciências da Computação da Universidade Estácio de Sá - em curso" 
        />

<CardGrande 
          imagem={labenu} 
          nome="Desenvolvedora WEB" 
          descricao="Labenu - em curso" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
