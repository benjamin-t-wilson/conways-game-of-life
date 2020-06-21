import React from "react";
import logo from "../assets/logo_icon.svg";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="navLogoContainer">
          <img src={logo} alt="btwicode logo" />
          <h3>Benjamin T Wilson</h3>
        </div>
        <div className="navLinks">
          <a
            href="https://www.btwicode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website<span> {`//`}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
