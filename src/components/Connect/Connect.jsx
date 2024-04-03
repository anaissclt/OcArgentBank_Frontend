import React from 'react';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../../layouts/Header/header.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';


function Connect() {
  // Utilisation du hook useSelector pour obtenir les données de l'utilisateur connecté
    const { userName } = useSelector(state => state.auth) || {};
    const dispatch = useDispatch(); // Hook useDispatch pour dispatcher des actions Redux
    const navigate = useNavigate() // Hook de navigation de React Router
  
    const handleLogOut = (e) => {
      e.preventDefault();
      // Dispatch pour déconnecter l'utilisateur
      dispatch(logOut(navigate("/login")));
      // Suppression du token de session
      sessionStorage.removeItem("token");
    };
  
    return (
      <>
        <div>
          <NavLink to="/profile" className="navigation__item">
            <FontAwesomeIcon icon={faRightFromBracket} />{userName}
          </NavLink>
  
          <NavLink className="navigation__item" onClick={handleLogOut}>
            <FontAwesomeIcon icon={faCircleUser} />
            Log Out
          </NavLink>
        </div>
      </>
    );
  }
  
  export default Connect;