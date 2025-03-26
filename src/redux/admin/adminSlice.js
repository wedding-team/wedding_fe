import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import AdminApi from "../../apis/AdminApi";

const clearAuthFromLocalStorage = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("expiry");
    localStorage.removeItem("uid");
    localStorage.removeItem("admin");
};

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

        if (!headers["access-token"] || !admin) {
            throw new Error("Dữ liệu đăng nhập không hợp lệ");
        }

        const authData = {
            admin,
            token: headers["access-token"],
            client: headers["client"],
            expiry: headers["expiry"],
            uid: headers["uid"],
        };

        localStorage.setItem("access-token", authData.token);
        localStorage.setItem("client", authData.client);
        localStorage.setItem("expiry", authData.expiry);
        localStorage.setItem("uid", authData.uid);
        localStorage.setItem("admin", JSON.stringify(authData.admin));

        return authData;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Email hoặc mật khẩu không chính xác");
    }
});

export const getAllUsers = createAsyncThunk(
    "admin/getAllUsers",
    async ({page = 1, search = ""}, {rejectWithValue}) => {
        try {
            const response = await AdminApi.getAllUsers(page, search);
            return {
                users: response.data.users || [],
                userCount: response.data.meta?.total_count || 0,
                totalPages: response.data.meta?.total_pages || 1,
                currentPage: response.data.meta?.current_page || 1,
            };
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Lỗi khi lấy danh sách người dùng");
        }
    }
);

export const updateUser = createAsyncThunk(
    "admin/updateUser",
    async ({userId, data}, {rejectWithValue}) => {
        try {
            const response = await AdminApi.updateUser(userId, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Không thể cập nhật tài khoản");
        }
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        logoutAdmin: (state) => {
            Object.assign(state, {
                admin: null,
                token: null,
                client: null,
                expiry: null,
                uid: null,
                isAdminAuthenticated: false,
                users: [],
                userCount: 0,
                totalPages: 0,
                currentPage: 1,
                error: null,
            });
            clearAuthFromLocalStorage();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, {payload}) => {
                Object.assign(state, {
                    loading: false,
                    admin: payload.admin,
                    token: payload.token,
                    client: payload.client,
                    expiry: payload.expiry,
                    uid: payload.uid,
                    isAdminAuthenticated: true,
                });
            })
            .addCase(loginAdmin.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
                state.isAdminAuthenticated = false;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, {payload}) => {
                Object.assign(state, {
                    loading: false,
                    users: payload.users,
                    userCount: payload.userCount,
                    totalPages: payload.totalPages,
                    currentPage: payload.currentPage,
                });
            })
            .addCase(getAllUsers.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.users = state.users.map(user =>
                    user.id === payload.id ? payload : user
                );
            })
            .addCase(updateUser.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const {logoutAdmin} = adminSlice.actions;
export default adminSlice.reducer;
