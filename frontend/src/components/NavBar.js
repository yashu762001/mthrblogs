import React from "react";
import {Link, NavLink} from 'react-router-dom'
const mystyle = {
    color: "black",
    paddingLeft: "20px",
    fontFamily: "Georgia",
    fontSize : "25px", 
    fontWeight:"bold"
  };
  // #ed2939
  const backgroundstyle = {
    backgroundColor : "#ed2939"
  } ; 

const NavBar = ()=> (
    <nav style={backgroundstyle}>
    <div class="container-fluid">
      <Link to='/' class="navbar-brand">
        <span style={mystyle}>
        THE CODER'S HUB
    </span>
      </Link>
    </div>
  </nav>
)

export default NavBar