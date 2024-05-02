import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Vérifier le code de statut de la réponse
        if (response.status === 400) {
          // Gérer le cas où les informations de connexion sont incorrectes
          throw new Error("Email ou mot de passe invalide.");
        } else {
          // Gérer d'autres erreurs de requête
          throw new Error(
            "Une erreur s'est produite. Veuillez réessayer plus tard."
          );
        }
      }

      const responseJson = await response.json();

      const { token } = responseJson.body;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
      return token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// slice Redux "auth"
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userName: null,

    isLoggedIn: false,
    token: null,
    error: null,
  },
  reducers: {
    logOut(state) {
      // Réinitialise l'état lors de la déconnexion
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;

      // Supprime le token de localStorage
      localStorage.removeItem("token");
    },
    setLoggedIn(state, action) {
      // Met à jour l'état pour indiquer que l'utilisateur est connecté avec un token
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        // Met à jour l'état en cas de succès de `fetchLogin`
        state.isLoggedIn = true;
        state.token = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        // Gère les erreurs de `fetchLogin`
        state.error = action.payload;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export const { logOut, setLoggedIn } = authSlice.actions;

// Action pour se connecter avec un token
export const logInWithToken = (token) => (dispatch) => {
  // MAJ de l'état pour indiquer que l'utilisateur est connecté avec le token
  dispatch(authSlice.actions.setLoggedIn({ token }));
};

export default authSlice.reducer;
