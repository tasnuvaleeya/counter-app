import React, { Component } from "react";

// stateless functional component
// can't use lifecycle hooks

const NavBar = ({ totalCounters }) => {
    console.log("Navbar - rendered");
    
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          { totalCounters }
        </span>
      </a>
    </nav>
  );
};
// class NavBar extends Component {
//   render() {

//   }
// }

export default NavBar;
