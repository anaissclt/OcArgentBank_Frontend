// IMPORT
import React from "react";
import { NavLink } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useSelector } from "react-redux"

// STYLE
import "./header.css";

// ASSETS
import argentBankLogo from "../../assets/argentBankLogo.png";

// COMPOSANTS
import Connect from '../../components/Connect/Connect';

function Header() {

  const loggedIn = useSelector((state) => state.auth.isLoggedIn)

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

      {loggedIn ? <Connect/> : 
      <div>
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faCircleUser} className="iconStyle" />
          Sign In
        </NavLink>
      </div>}

    </nav>
  );
}

export default Header;
