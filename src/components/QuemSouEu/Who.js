import React from 'react';
import Foto from '../../assets/foto-leonardorendano.jpg';

import './Who.css';
import '../QuemSouEu/ResponsiveWho.css';

export default function Who() {
  return(
    <div className="mainDiv" id="quemsoueu">
      <div className="whoText">
        <h1>Quem sou eu</h1>
        <h3>Olá!</h3>
        <p>Eu me chamo Leonardo Rendano,</p>
        <p>sou desenvolvedor Front-End e apaixonado por tecnologia.</p>
        <p>Esta é a minha primeira página pessoal</p>
        <p>e aqui você encontrará alguns dos meus projetos e suas tecnologias.</p><br></br>
        <h4>"Do Front ao Back e rumo ao Fullstack!" - Leonardo Rendano</h4>
      </div>
      <div className="whoImg">
        <img src={Foto} alt="foto do perfil" />
      </div>
    </div>
  );
}