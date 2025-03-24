import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminApi from "../../apis/AdminApi";

const initialState = {
    admin: JSON.parse(localStorage.getItem("admin")) || null,
    token: localStorage.getItem("access-token") || null,
    client: localStorage.getItem("client") || null,
    expiry: localStorage.getItem("expiry") || null,
    uid: localStorage.getItem("uid") || null,
    isAuthenticated: !!localStorage.getItem("access-token"),
    loading: false,
    error: null,
    users: [],
    userCount: 0,

};

export const loginAdmin = createAsyncThunk("admin/loginAdmin", async (data, { rejectWithValue }) => {
    try {
        const response = await AdminApi.loginAdmin(data);
        const headers = response.headers;
        const admin = response.data;

        if (!headers["access-token"] || !admin) {
            throw new Error("Dữ liệu đăng nhập không hợp lệ");
        }

        localStorage.setItem("access-token", headers["access-token"]);
        localStorage.setItem("client", headers["client"]);
        localStorage.setItem("expiry", headers["expiry"]);
        localStorage.setItem("uid", headers["uid"]);
        localStorage.setItem("admin", JSON.stringify(admin));

        return {
            admin,
            token: headers["access-token"],
            client: headers["client"],
            expiry: headers["expiry"],
            uid: headers["uid"],
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Email hoặc mật khẩu không chính xác");
    }
});

export const getAllUsers = createAsyncThunk(
    "admin/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await AdminApi.getAllUsers();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Lỗi khi lấy danh sách người dùng");
        }
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        logoutAdmin: (state) => {
            state.admin = null;
            state.token = null;
            state.client = null;
            state.expiry = null;
            state.uid = null;
            state.isAuthenticated = false;
            state.error = null;
            state.users = [];
            state.userCount = 0;

            // Xóa khỏi localStorage
            localStorage.removeItem("access-token");
            localStorage.removeItem("client");
            localStorage.removeItem("expiry");
            localStorage.removeItem("uid");
            localStorage.removeItem("admin");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.admin = payload.admin;
                state.token = payload.token;
                state.client = payload.client;
                state.expiry = payload.expiry;
                state.uid = payload.uid;
                state.isAuthenticated = true;
            })
            .addCase(loginAdmin.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
                state.isAuthenticated = false;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.users = payload;
                state.userCount = payload.length;
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
