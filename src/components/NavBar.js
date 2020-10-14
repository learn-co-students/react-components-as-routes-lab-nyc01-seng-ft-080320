import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
          to="/"
          exact
          activeStyle={{
            background: 'grey'
          }}
        >Home</NavLink>
      <NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'grey'
          }}
        >Movies</NavLink>
      <NavLink
          to="/directors"
          exact
          activeStyle={{
            background: 'grey'
          }}
        >Directors</NavLink>
      <NavLink
          to="/actors"
          exact
          activeStyle={{
            background: 'grey'
          }}
        >Actors</NavLink>

      
    </div>
  );
};

export default NavBar;
