// Import
import React from "react";

// STYLE
import "./form.css";

// COMPOSANTS
import Input from "../../components/Input/Input";

function Form() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <Input
            className="input-wrapper"
            htmlFor="email"
            type="email"
            id="email"
            text="Email"
            value="Email"
          />
          <Input
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            value="Password"
          />
          <Input
            className="input-remember"
            htmlFor="rememberMe"
            type="checkbox"
            id="rememberMe"
            text="Remember me"
          />
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Form;
