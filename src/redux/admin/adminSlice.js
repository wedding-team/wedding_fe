import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AdminApi from "../../apis/admin/AdminApi";
import {clearAuthData, saveAuthData} from "../../utils/AuthHelper";

const initialState = {
    admin: JSON.parse(localStorage.getItem("admin")) || null,
    token: localStorage.getItem("access-token") || null,
    client: localStorage.getItem("client") || null,
    expiry: localStorage.getItem("expiry") || null,
    uid: localStorage.getItem("uid") || null,
    isAdminAuthenticated: !!localStorage.getItem("access-token"),
    loading: false,
    error: null,
    users: [],
    userCount: 0,
    totalPages: 0,
    currentPage: 1,
};

export const loginAdmin = createAsyncThunk("admin/loginAdmin", async (data, {rejectWithValue}) => {
    try {
        const response = await AdminApi.loginAdmin(data);
        const {headers, data: admin} = response;
        if (!headers["access-token"] || !admin) throw new Error("Dữ liệu đăng nhập không hợp lệ");
        const authData = {
            admin,
            token: headers["access-token"],
            client: headers["client"],
            expiry: headers["expiry"],
            uid: headers["uid"],
        };

        saveAuthData(authData);
        return authData;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Email hoặc mật khẩu không chính xác");
    }
});

export const getAllUsers = createAsyncThunk("admin/getAllUsers", async ({page = 1, search = ""}, {rejectWithValue}) => {
    try {
        const {data} = await AdminApi.getAllUsers(page, search);
        return {...data.meta, users: data.users};
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Lỗi khi lấy danh sách người dùng");
    }
});

export const updateUser = createAsyncThunk("admin/updateUser", async ({userId, data}, {rejectWithValue}) => {
    try {
        const response = await AdminApi.updateUser(userId, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Không thể cập nhật tài khoản");
    }
});

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        logoutAdmin: (state) => {
            clearAuthData();
            Object.assign(state, {
                ...initialState,
                users: state.users,
                userCount: state.userCount,
                totalPages: state.totalPages,
                currentPage: state.currentPage,
            });
        },
        updateUserInStore: (state, {payload}) => {
            const user = state.users.find((user) => user.id === payload.id);
            if (user) Object.assign(user, payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.fulfilled, (state, {payload}) => {
                state.admin = payload.admin;
                state.token = payload.token;
                state.client = payload.client;
                state.expiry = payload.expiry;
                state.uid = payload.uid;
                state.isAdminAuthenticated = true;
                state.error = null;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.users = payload.users;
                state.userCount = payload.total_count;
                state.totalPages = payload.total_pages;
                state.currentPage = payload.current_page;
            })
            .addCase(getAllUsers.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const {logoutAdmin, updateUserInStore} = adminSlice.actions;
export default adminSlice.reducer;
