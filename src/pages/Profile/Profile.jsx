// IMPORT
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// COMPOSANTS
import User from "../../components/User/User";
import Accounts from "../../components/Accounts/Accounts";
import { logInWithToken } from "../../features/authSlice";

function Profile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Hook useSelector pour l'état d'authentification
  const dispatch = useDispatch();

  useEffect(() => {
    // Vérifie si l'option "Remember Me" est activée
    const rememberMe = localStorage.getItem("token") !== null;

    // Si l'utilisateur n'est pas connecté mais "Remember Me" est activé
    if (!isLoggedIn && rememberMe) {
      // Connecte l'utilisateur en utilisant le token du localStorage
      dispatch(logInWithToken(localStorage.getItem("token")));
      // Si l'utilisateur n'est pas connecté et "Remember Me" n'est pas activé
    } else if (!isLoggedIn && !rememberMe) {
      // redirige vers la page de connexion
      window.location.replace("/login");
    }
  }, [isLoggedIn, dispatch]); // se déclenche lorsque isLoggedIn ou dispatch changent

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <main className="main bg-dark">
        <User />
        <h2 className="sr-only">Accounts</h2>
        <Accounts
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Accounts
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
}

export default Profile;
