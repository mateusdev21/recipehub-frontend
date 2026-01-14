import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipes } from "@/services/recipeService";

export const fetchRecipes = createAsyncThunk(
    "recipes/fetch",
    async () => {
        const res = await getRecipes();
        console.log("test", res.data);
        return res.data;
    }
);

const recipeSlice = createSlice({
    name: "recipes",
    initialState: {
        list: [],
        featured: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
    },
});

export default recipeSlice.reducer;
