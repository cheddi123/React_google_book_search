import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      
       <h1 className="navbar navbar-brand">Google Books </h1> 
      
      <a className="navbar-brand" href="/"> Home </a>
        <Link to="./books/">Saved Books </Link> 

    </nav>
  );
}

export default Nav;
