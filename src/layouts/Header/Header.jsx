import React from "react";
import "./header.css";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="main-nav">
        <NavLink to={"/"}>
            <img class="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
        </NavLink>
      <h1 class="sr-only">Argent Bank</h1>
      <div>
      <NavLink to="/login" >
        <p class="main-nav-item">Sign In </p>
      </NavLink>
      </div>
    </nav>
  );
}

export default Header;
