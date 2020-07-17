import React from 'react';
import './Projetos.css';
import '../Projetos/ResponsiveProjetos.css';

import ECOLETA from '../../assets/ecoleta.jpeg';
import COFFEELOVER from '../../assets/coffeelover.jpeg';

export default function Projetos() {
  return(
    <div className="projetos-main" id="portfolio">
      <div className="projetosText">
        <h1>Portfólio</h1>
      </div>
      <div className="cardMain">
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={ECOLETA} alt="Projeto Ecoleta"></img>
                <p>ECOLETA</p>
              </div>
            </div>
            <div className="face face2">
            <div className="content">
                <p>Projeto realizado em conjunto com a Rocketseat
                  durante a NLW - Next Level Week, em Junho de 2020.
                  As tecnologias usadas foram HTML5, CSS3, Javascript,
                  Node JS, Express e SQLite.</p>
                <a href="https://github.com/leonardo-rendano/Projeto-ECOLETA-Next-Level-Week-Rocketseat">Ver no GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src={COFFEELOVER} alt="Coffee Lover"></img>
                <p>Coffee Lover</p>
              </div>
            </div>
            <div className="face face2">
            <div className="content">
                <p>Um contador feito em React JS,
                  utilizando a API Hooks do React
                  para você que ama café.
                </p>
                <a href="https://github.com/leonardo-rendano/coffeelover">Ver no GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



