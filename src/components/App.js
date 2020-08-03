import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About';
import Episodies from '../pages/Episodies'
import Random from '../pages/Random'

import Header from '../components/Header';
import Menu from "../components/Menu";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Route exact path="/" component={Home}/>
      <Route exact path="/random" component={Random}/>
      <Route exact path="/about/:id" component={About} />
      <Route exact path="/episodies" component={Episodies} />
    </BrowserRouter>
  );
}

export default App;
