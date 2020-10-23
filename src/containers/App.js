import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <div>  
      <Router>
        <div>
          <div>
            <NavBar/>
          </div>
            <Switch>
              <Route excatly path={'/movies'} component={Movies}/>
              <Route excatly path={'/directors'} component={Directors}/>
              <Route excatly path={'/actors'} component={Actors}/>  
              <Route excatly path={'/'} component={Home}/>
            </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App
