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
    const { userName } = useSelector(state => state.profile); // Sélectionne le nom d'utilisateur depuis l'état global du store Redux
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Sélectionne l'état de connexion de l'utilisateur depuis le store Redux

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
  {/* affiche un lien de déconnexion si le user est connecté ou s'il y a un "remember me" activé */}
        {isLoggedIn || rememberMe ? (
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