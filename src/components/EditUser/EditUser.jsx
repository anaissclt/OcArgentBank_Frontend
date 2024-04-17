// IMPORT
import React from "react";
import { useSelector } from 'react-redux';

// STYLE
import "./edituser.css";

// COMPOSANTS
import Input from "../Input/Input";
import Button from "../Button/Button";

function EditUser() {

    const { firstName, lastName, userName } = useSelector(state => state.profile);

    const handleSave = (e) => {
        e.preventDefault(); // Empêche la soumission du formulaire
    };

    const handleCancel = (e) => {
        e.preventDefault();
    };

  return (
    <form>
      <Input
        className="input-wrapper input-wrapper--edit"
        htmlFor="UserName"
        text="User Name: "
        type="text"
        id="UserName"
        value={userName }
        autoComplete="off"
      />
     
        <Input
          className="input-wrapper input-wrapper--edit"
          htmlFor="firstname"
          text="First Name: "
          type="text"
          id="firstname"
          value={firstName}
          disabled
        />

        <Input
          className="input-wrapper input-wrapper--edit"
          htmlFor="LastName"
          text="Last Name: "
          type="text"
          id="LastName"
          disabled
          value={lastName}
        />
     
      <Button className="edit-button" text="Save"  type="submit" onClick={handleSave} />
      <Button className="edit-button" text="Cancel"  onClick={handleCancel}/>
    </form>
  );
}

export default EditUser;
