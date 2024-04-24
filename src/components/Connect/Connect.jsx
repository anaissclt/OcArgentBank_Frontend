// IMPORT
import React from 'react';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// STYLE
import '../../layouts/Header/header.css';

// COMPOSANTS
import { logOut } from '../../features/authSlice';

function Connect() {
  
    const dispatch = useDispatch(); // Hook useDispatch pour dispatcher des actions Redux
    const navigate = useNavigate() // Hook de navigation de React Router
    const { userName } = useSelector(state => state.profile);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const rememberMe = localStorage.getItem("token") !== null;
  
    const handleLogOut = (e) => {
      e.preventDefault();
      // Dispatch pour déconnecter l'utilisateur
      dispatch(logOut(navigate("/")));
      // Suppression du token de sessionStorage et du localStorage
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    };
  
    return (
      <>
         <div>
        {isLoggedIn || rememberMe ? ( // Vérifie si l'utilisateur est connecté et/ou "Remember Me" est activé
          <>
            <NavLink to="/profile" className="navigation__item">
              <FontAwesomeIcon icon={faCircleUser} />{userName}
            </NavLink>
            <NavLink className="navigation__item" onClick={handleLogOut}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </NavLink>
          </>
        ) : null}
      </div>
      </>
    );
  }
  
  export default Connect;