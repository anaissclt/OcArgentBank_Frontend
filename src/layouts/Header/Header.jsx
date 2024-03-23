// IMPORT
import React from "react";
import { NavLink } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// STYLE
import "./header.css";

// ASSETS
import argentBankLogo from "../../assets/argentBankLogo.png";

function Header() {
  return (
    <nav class="main-nav">
      <NavLink class="main-nav-logo" to={"/"}>
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faCircleUser} className="iconStyle" />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
