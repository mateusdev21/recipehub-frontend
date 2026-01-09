import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "@/services/authService";

export const login = createAsyncThunk(
    "auth/login",
    async (payload) => {
        const res = await loginUser(payload);
        return res.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        role: "guest",
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.role = "guest";
            state.isAuthenticated = false;
            localStorage.removeItem("access_token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.role = action.payload.user.role;
            state.token = action.payload.accessToken;
            state.isAuthenticated = true;
            localStorage.setItem("access_token", action.payload.accessToken);
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
