import React from 'react';
import './Contato.css';
import '../Contato/ResponsiveContato.css';


import { FaGithubSquare, FaEnvelopeSquare, FaLinkedin } from 'react-icons/fa';

export default function Contato() {
  return(
    <div className="mainContato" id="contato">
      <div className="contatoContent">
      <div className="contatoTitle">
        <h1>Contato</h1>
      </div>
        <div className="contatoIcons">
          
          <div className="icon">
            <FaGithubSquare color="#888" size={110}></FaGithubSquare>
            <a href="https://github.com/leonardo-rendano">
              <p>GitHub/leonardo-rendano</p>
            </a>
          </div>
         
          <div className="icon">
            <FaLinkedin color="#777" size={110}></FaLinkedin>
            <a href="https://www.linkedin.com/in/leonardo-campanh%C3%A3o-rendano-50116a1a4/">
              <p>LinkedIn/leonardo-rendano</p>
            </a>
          </div>

         <div className="icon">
            <FaEnvelopeSquare color="#777" size={110}></FaEnvelopeSquare>
            <p>leonardo.rendano@gmail.com</p>
          </div>
                    
        </div>
        </div>
    </div>
  );
}