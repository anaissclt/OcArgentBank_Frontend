import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({}),
        });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Échec de la récupération du profil utilisateur');
      }

      const data = await response.json();
      console.log("Data received from API:", data); // Affichez les données reçues
      
      return data.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const profileSlice = createSlice({
    name: "profile",
    initialState: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      error: null,
    },
    reducers: {
      setEditProfile: (state, action) => {
        state.userName = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
          state.email = action.payload.email; // Récupération de l'email
          state.firstName = action.payload.firstName; // Récupération du prénom
          state.lastName = action.payload.lastName; // Récupération du nom de famille
          state.userName = action.payload.userName; // Récupération de l'user name
        })
        .addCase(fetchUserProfile.rejected, (state, action) => {
          state.error = action.payload;
        });
    },
  });

export default profileSlice.reducer;