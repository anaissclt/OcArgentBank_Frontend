// IMPORT
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// STYLE
import "./user.css";

// COMPOSANTS
import Button from "../Button/Button";
import { fetchUserProfile } from "../../features/userSlice";
import EditUser from "../EditUser/EditUser";

function User() {
  const token = useSelector((state) => state.auth.token);
  const { firstName, lastName } = useSelector((state) => state.profile); // Utilisation de firstName et lastName
  const dispatch = useDispatch();

  //charge le profil de l'utilisateur
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch, token]);

  // Crée une variable qui contient le nom de l'utilisateur s'il est disponible, sinon une chaîne vide
  const displayName = firstName && lastName ? `${firstName} ${lastName}` : "";

  const [isEditing,setIsEditing] = useState(false);

   // fonction toggleEditing qui inverse l'état de isEditing
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      {isEditing ? (
        <div>
          <h1> Edit user info </h1>
          {/* toggleEditing est passée en tant que prop pour permettre à EditUser de basculer hors du mode édition */}
          <EditUser  toggleEditing={toggleEditing}/> 
        </div>
      ) : (
        <div>
          <h1>
            Welcome back
            <br />
            {displayName || "Loading..."} !
          </h1>
          <Button
            className="edit-button"
            text="Edit Name"
            onClick={toggleEditing}
          />
        </div>
      )}
    </div>
  );
}

export default User;
