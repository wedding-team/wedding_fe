import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TemplateApi from "../../apis/admin/TemplateApi";

export const fetchTemplates = createAsyncThunk(
    "templates/fetchAll",
    async () => {
        const token = localStorage.getItem("access-token");
        if (!token) {
            throw new Error("Không tìm thấy token! Người dùng cần đăng nhập.");
        }
        const response = await TemplateApi.getAllTemplates();
        return response.data.body;
    }
);

export const fetchTemplateById = createAsyncThunk(
    "templates/fetchById",
    async (id) => {
        const response = await TemplateApi.getTemplate(id);
        return response.data.template;
    }
);

export const saveTemplate = createAsyncThunk(
    "templates/save",
    async ({ id, data }, { dispatch }) => {
        const response = await TemplateApi.saveTemplate(id, data);
        dispatch(fetchTemplates());
        return response.data.template;
    }
);

export const deleteTemplate = createAsyncThunk(
    "templates/delete",
    async (id, { dispatch }) => {
        await TemplateApi.deleteTemplate(id);
        dispatch(fetchTemplates());
        return id;
    }
);

const templateSlice = createSlice({
    name: "templates",
    initialState: {
        list: [],
        selected: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTemplates.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTemplates.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTemplates.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTemplateById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTemplateById.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(fetchTemplateById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(saveTemplate.pending, (state) => {
                state.loading = true;
            })
            .addCase(saveTemplate.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(saveTemplate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteTemplate.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteTemplate.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.filter((template) => template.id !== action.payload);
            })
            .addCase(deleteTemplate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default templateSlice.reducer;
