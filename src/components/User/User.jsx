// IMPORT
import React from "react";

// STYLE
import "./user.css";

// COMPOSANTS
import Button from "../Button/Button";

function User() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        name !
      </h1>
      <Button className="edit-button" text="Edit Name" />
    </div>
  );
}

export default User;
