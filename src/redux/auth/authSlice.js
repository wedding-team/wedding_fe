import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthApi from "../../apis/AuthApi";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    loading: false,
    error: null,
};

const saveUserToLocalStorage = (token, user) => {
    localStorage.setItem("accessToken", token["access-token"]);
    localStorage.setItem("client", token.client);
    localStorage.setItem("uid", token.uid);
    localStorage.setItem("Authorization", token.Authorization);
    localStorage.setItem("user", JSON.stringify(user));
};

const clearUserData = () => {
    ["accessToken", "client", "uid", "Authorization", "user"].forEach((key) =>
        localStorage.removeItem(key)
    );
};

export const loginUser = createAsyncThunk("auth/loginUser", async (data, {rejectWithValue}) => {
    try {
        const response = await AuthApi.login(data);
        const {token, data: user} = response.data;
        if (!token || !user) {
            return rejectWithValue("Đăng nhập thất bại, dữ liệu không hợp lệ");
        }
        if (response.status === 401) {
            return rejectWithValue("Email hoặc mật khẩu không chính xác");
        }
        if (user.blocked) {
            return rejectWithValue("Tài khoản của bạn đã bị khóa!");
        }
        saveUserToLocalStorage(token, user);
        return {token, user};
    } catch (error) {
        const message = error.response?.data?.error;
        return rejectWithValue(message);
    }
});

export const signUp = createAsyncThunk("auth/signup", async (data, {rejectWithValue}) => {
    try {
        const response = await AuthApi.signUp(data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Đăng ký thất bại");
    }
});

export const updateProfile = createAsyncThunk("auth/updateProfile", async (data, {rejectWithValue}) => {
    try {
        const response = await AuthApi.updateProfile(data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.error);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            clearUserData();
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        updateUserRole: (state, action) => {
            if (state.user) {
                state.user.role = action.payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.user = payload.user;
                state.token = payload.token["access-token"];
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signUp.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload.user;
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                state.loading = false;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const {logout, updateUserRole} = authSlice.actions;
export default authSlice.reducer;
