// IMPORT
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// STYLE
import "./user.css";

// COMPOSANTS
import Button from "../Button/Button";
import { fetchUserProfile } from '../../features/userSlice';

function User() {

  const token = useSelector(state => state.auth.token);
  console.log("Token user", token);
  const { firstName, lastName } = useSelector((state) => state.profile); // Utilisation de firstName et lastName
  console.log("Profile State:", { firstName, lastName });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Calling fetchUserProfile");
    dispatch(fetchUserProfile());
  }, [dispatch, token]);

  // Vérification si firstName et lastName sont définis
  const displayName = firstName && lastName ? `${firstName} ${lastName}` : '';

  console.log("firstName:", firstName);
  console.log("lastName:", lastName);

  return (
    <div className="header">
           <h1>Welcome back<br />{displayName || 'Loading...'}!</h1>
            <Button
              className="edit__button"
              text="Edit"
            />
    </div>
  );
}

export default User;