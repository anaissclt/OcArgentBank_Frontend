// IMPORT
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import "./edituser.css";

// COMPOSANTS
import Input from "../Input/Input";
import Button from "../Button/Button";
import { updateUserName } from '../../features/userSlice';

// La fonction prend la prop toggleEditing en argument
//qui est une fonction pour activer/désactiver le mode édition
function EditUser({ toggleEditing }) {

    const { firstName, lastName, userName } = useSelector(state => state.profile);
    const [newUserName, setNewUserName] = useState(userName);
    const dispatch = useDispatch();

    // Fonction pour enregistrer les modifications
    const handleSave = () => {
      toggleEditing();
      dispatch(updateUserName(newUserName));
    };
  
    // Fonction pour la soumission du formulaire
    const handleSubmit = (e) => {
      e.preventDefault(); // Empêche la soumission du formulaire
      handleSave();
    };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        className="input-wrapper input-wrapper--edit"
        htmlFor="UserName"
        text="User Name: "
        type="text"
        id="UserName"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
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
     
      <Button className="edit-button" text="Save"  type="submit" />
      {/* la fonction toggleEditing, qui désactive le mode d'édition */}
      <Button className="edit-button" text="Cancel"  onClick={toggleEditing} />
    </form>
  );
}

export default EditUser;
