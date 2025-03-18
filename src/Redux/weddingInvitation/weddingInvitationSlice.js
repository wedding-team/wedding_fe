import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeddingInvitationApi from "../../apis/WeddingInvitationApi";

const initialState = {
    weddingInvitation: null,
    status: "idle",
    error: null,
};

export const fetchWeddingInvitations = createAsyncThunk(
    "weddingInvitations/fetchAll",
    async () => {
        const response = await WeddingInvitationApi.getWeddingInvitation();
        return response.data.body;
    }
);

export const updateWeddingInvitation = createAsyncThunk(
    "weddingInvitations/update",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await WeddingInvitationApi.updateWeddingInvitation(data);
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Có lỗi xảy ra");
        }
    }
);

const weddingInvitationSlice = createSlice({
    name: "weddingInvitations",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeddingInvitations.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWeddingInvitations.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.weddingInvitation = action.payload;
            })
            .addCase(fetchWeddingInvitations.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateWeddingInvitation.fulfilled, (state, action) => {
                state.weddingInvitation = action.payload;
            });
    },
});

export default weddingInvitationSlice.reducer;
