// Import
import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// STYLE
import "./form.css";

// COMPOSANTS
import Input from "../../components/Input/Input";
import Button from "../Button/Button";

function Form() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="iconStyle" />
        <h1>Sign In</h1>
        <form>
          <Input
            className="input-wrapper"
            htmlFor="email"
            type="email"
            id="email"
            text="Username"
            value=""
          />
          <Input
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            value=""
          />
          <Input
            className="input-remember"
            htmlFor="rememberMe"
            type="checkbox"
            id="rememberMe"
            text="Remember me"
          />
          <Button className="sign-in-button" text="Sign In"></Button>
        </form>
      </section>
    </main>
  );
}

export default Form;
