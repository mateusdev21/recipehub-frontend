import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import recipeReducer from "./slices/recipeSlice";
import favoriteReducer from "./slices/favoriteSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        recipes: recipeReducer,
        favorites: favoriteReducer,
    },
});
