import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome';
import Who from './components/QuemSouEu/Who';
import Techno from './components/Tecnologias/Techno';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';


const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      <HeaderWelcome />
      <Who />
      <Techno />
      <Projetos />
      <Contato />
      <Footer />
      <Switch>        
        <Route path="/quem sou eu" component={Who} />
        <Route path="/Tecnologias" component={Techno} />
        <Route path="/Portfolio" component={Projetos} />
        <Route path="/Contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;