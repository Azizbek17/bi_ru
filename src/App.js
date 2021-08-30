import React from 'react';
import './App.css';
import './components/Header/Header.css';
import './components/Nav/Nav.css';
import './components/Main/Main.css';
import './components/Footer/Footer.css';
import Card from './components/Women/Card';
import Dresses from './components/Women/Dresses';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Drawer from './components/Drawer/Drawer';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {

  return (


    <div className="wrapper clear">
      <Drawer />
      <Header />
      <Nav />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main" component={Main} />
          <Route path="/card" component={Card} />
          <Route path="/dresses" component={Dresses} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>

  );
}

export default App;
