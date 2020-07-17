import React from 'react';
import './HeaderWelcome.css';
import '../HeaderWelcome/ResponsiveHeaderWelcome.css';


export default function HeaderWelcome() {
  return(
    <div className="HeaderWelcome" id="home">
      <div className="text">
        <h1>Leonardo Rendano</h1>
        <h3>&lt; Front-End Developer &gt;</h3>
        <h1>Bem-vindo!</h1>
      </div>
    </div>
  );
}