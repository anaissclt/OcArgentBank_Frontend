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
  // console.log("Token user", token);
  const { firstName, lastName } = useSelector((state) => state.profile); // Utilisation de firstName et lastName
  // console.log("Profile State:", { firstName, lastName });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch, token]);

  // Vérification si firstName et lastName sont définis
  const displayName = firstName && lastName ? `${firstName} ${lastName}` : "";

  const [isEditing,setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="header">
      {isEditing ? (
        <div>
          <h1> Edit user info </h1>
          <EditUser />
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
