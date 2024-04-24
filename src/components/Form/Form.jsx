// IMPORT
import React, { useState, useEffect } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

// STYLE
import "./form.css";

// COMPOSANTS
import Input from "../../components/Input/Input";
import Button from "../Button/Button";

function Form() {
  const dispatch = useDispatch(); // Dispatch Redux
  const error = useSelector((state) => state.auth.error); // Sélecteur Redux pour les erreurs
  const navigate = useNavigate(); // Hook pour la navigation dans React Router
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Sélecteur Redux pour la connexion de l'utilisateur

  // États locaux pour les champs du formulaire et les messages d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = () => {
    dispatch(fetchLogin({ email, password, rememberMe }));
  };

  // Soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Dispatch de l'action fetchLogin avec les données du formulaire
      await dispatch(fetchLogin({ email, password, rememberMe }));
    } catch (error) {
      // En cas d'erreur, nettoyer le token de session
      console.log(error);
      sessionStorage.removeItem("token");
    }
  
    // Vérifier si l'email ou le mot de passe est incorrect
    if (!isLoggedIn && (email !== "email_correct" || password !== "mot_de_passe_correct")) {
      setLoginError("Identifiant ou mot de passe incorrect"); 
      return;
    }
  };

  // Réinitialiser le message d'erreur lorsque le champ de mot de passe ou d'email est modifié
  useEffect(() => {
    setLoginError("");
  }, [email, password]);

  // Redirection après une connexion réussie
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="iconStyle" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <Input
            className="input-wrapper"
            htmlFor="email"
            type="email"
            id="email"
            text="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Input
            className="input-remember"
            htmlFor="rememberMe"
            type="checkbox"
            id="rememberMe"
            text="Remember me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            autoComplete="off"
          />
          <Button
            className="sign-in-button"
            text="Sign In"
            onClick={handleLogin}
          ></Button>
          {loginError && <div className="error-message">{loginError}</div>}
        </form>
      </section>
    </main>
  );
}

export default Form;
