import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "@/services/newsService";

export const fetchNews = createAsyncThunk(
    "news/fetch",
    async () => {
        const res = await getNews();
        return res.data;
    }
);

const newsSlice = createSlice({
    name: "news",
    initialState: {
        list: [],
        featured: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
    },
});

export default newsSlice.reducer;
