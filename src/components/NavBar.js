import React from 'react';
import { NavLink, Router } from 'react-router-dom';

const NavBar = () => {
  return (
    
    
      <div>
        <NavLink to="/">Home</NavLink> <br></br>
        <NavLink to="/movies">Movies</NavLink><br></br>
        <NavLink to="/directors">Directors</NavLink><br></br>
        <NavLink to="/actors">Actors</NavLink>
      </div>
    
    
  );
};

export default NavBar;
