import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Header.css'
import '../Header/ResponsiveHeader.css';

export default function Header() {
  return(
    <nav className="Header">
      <ul>
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#quemsoueu">Quem sou eu</Link></li>
        <li><Link smooth to="#tecnologias">Tecnologias</Link></li>
        <li><Link smooth to="#portfolio">Portfólio</Link></li>
        <li><Link smooth to="#contato">Contato</Link></li>
      </ul>
    </nav>
  );
}