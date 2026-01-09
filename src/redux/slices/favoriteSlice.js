import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFavorites } from "@/services/favoriteService";

export const fetchFavorites = createAsyncThunk(
    "favorites/fetch",
    async () => {
        const res = await getFavorites();
        return res.data;
    }
);

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: { items: [] },
    extraReducers: (builder) => {
        builder.addCase(fetchFavorites.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default favoriteSlice.reducer;
