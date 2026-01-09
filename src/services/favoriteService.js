import api from "./api";

export const getFavorites = () => api.get("/favorites");
export const addFavorite = (recipeId) =>
    api.post("/favorites", { recipeId });
export const removeFavorite = (id) =>
    api.delete(`/favorites/${id}`);
