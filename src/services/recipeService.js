import api from "./api";

export const getRecipes = () => api.get("/recipes");

export const getFeaturedRecipes = () =>
    api.get("/recipes?featured=true&published=true");

export async function getRecipeDetail(id) {
    const res = await fetch(`${process.env.API_URL}/recipes/${id}`)
    return res.json()
}
