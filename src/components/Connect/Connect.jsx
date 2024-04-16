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
  // Utilisation du hook useSelector pour obtenir les données de l'utilisateur connecté
    const dispatch = useDispatch(); // Hook useDispatch pour dispatcher des actions Redux
    const navigate = useNavigate() // Hook de navigation de React Router
    const { firstName } = useSelector(state => state.profile)
  
    const handleLogOut = (e) => {
      e.preventDefault();
      // Dispatch pour déconnecter l'utilisateur
      dispatch(logOut(navigate("/login")));
      // Suppression du token de sessionStorage et du localStorage
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    };
  
    return (
      <>
        <div>
          <NavLink to="/profile" className="navigation__item">
            <FontAwesomeIcon icon={faRightFromBracket} />{firstName}
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