import React from 'react';

import HTML from '../../assets/html-logo2.png';
import CSS from '../../assets/css-logo2.png';
import JAVASCRIPT from '../../assets/javascript-logo.png';
import REACT from '../../assets/react-2.svg';
import BOOTSTRAP from '../../assets/bootstrap-logo.png';
import GIT from '../../assets/git-logo3.jpg';
import TYPESCRIPT from '../../assets/typescript-logo.png';
import SASS from '../../assets/sass-logo.png';
import STYLED from '../../assets/styled-logo.png';
import JQUERY from '../../assets/jquery-logo.png';


import './Techno.css';
import '../Tecnologias/ResponsiveTechno.css';

export default function Techno() {
  return(
    <div className="mainTechno" id="tecnologias">
      <div className="technoTitle">
        <h1>Tecnologias</h1>
      </div>
      <div className="icons">
        <div className="icon" id="item">
          <img src={HTML} alt="logo html" />
          <p>HTML 5</p>
        </div>
        <div className="icon" id="item">
          <img src={CSS} alt="logo css" />
          <p>CSS 3</p>
        </div>
        <div className="icon" id="item">
          <img src={JAVASCRIPT} alt="logo javascript" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="icon" id="item">
          <img src={TYPESCRIPT} alt="logo typescript" />
          <p>TYPESCRIPT</p>
        </div>
        <div className="icon" id="item">
          <img src={REACT} alt="logo react" />
          <p>REACT</p>
        </div>
        <div className="icon" id="item">
          <img src={BOOTSTRAP} alt="logo bootstrap" />
          <p>BOOTSTRAP 4</p>
        </div>
        <div className="icon" id="item">
          <img src={GIT} alt="logo git" />
          <p>GIT</p>
        </div>
        <div className="icon" id="item">
          <img src={SASS} alt="logo sass" />
          <p>SASS</p>
        </div>
        <div className="icon" id="item">
          <img src={STYLED} alt="logo styled-components" />
          <p>STYLED COMPONENTS</p>
        </div>
        <div className="icon" id="item">
          <img src={JQUERY} alt="logo jquery" />
          <p>JQUERY</p>
        </div>
      </div>
    </div>
  );
}