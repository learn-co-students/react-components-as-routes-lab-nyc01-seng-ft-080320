import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" style={{display: "flex", justifyContent: "space-between", width: "350px"}}>
      <NavLink to="/"><h3>Home</h3></NavLink>
      <NavLink to="/movies"><h3>Movies</h3></NavLink>
      <NavLink to="/directors"><h3>Directors</h3></NavLink>
      <NavLink to="/actors"><h3>Actors</h3></NavLink>
    </div>
  );
};

export default NavBar;
