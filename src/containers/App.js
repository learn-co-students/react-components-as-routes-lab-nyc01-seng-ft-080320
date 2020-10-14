import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Route path="/" exact component={Home}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/directors" component={Directors}/>
        <Route path="/actors" component={Actors}/>
      </div>
    </BrowserRouter>
  );
};

export default App
