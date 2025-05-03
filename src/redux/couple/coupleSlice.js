import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CoupleApi from "../../apis/CoupleApi";

const initialState = {
    couple: null,
    status: "idle",
    error: null,
};

export const fetchCouples = createAsyncThunk(
    "couples/fetchAll",
    async () => {
        const response = await CoupleApi.getWeddingInvitation();
        return response.data.body;
    }
);

export const updateCouple = createAsyncThunk(
    "couples/update",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await CoupleApi.updateWeddingInvitation(data);
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Có lỗi xảy ra");
        }
    }
);

const coupleSlice = createSlice({
    name: "couples",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCouples.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCouples.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.couple = action.payload;
            })
            .addCase(fetchCouples.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateCouple.fulfilled, (state, action) => {
                state.couple = action.payload;
            });
    },
});

export default coupleSlice.reducer;
