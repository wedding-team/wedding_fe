import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GeneralInfoApi from "../../apis/GeneralInfoApi";

const initialState = {
    generalInfo: null,
    status: "idle",
    error: null,
};

export const fetchGeneralInfos = createAsyncThunk(
    "generalInfos/fetchAll",
    async () => {
        const response = await GeneralInfoApi.getGeneralInfo();
        return response.data.body;
    }
);

export const updateGeneralInfo = createAsyncThunk(
    "generalInfos/update",
    async (updatedData) => {
        const response = await GeneralInfoApi.updateGeneralInfo(updatedData);
        return response.data.body;
    }
);

const getGeneralInfo = createSlice({
    name: "generalInfos",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchGeneralInfos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchGeneralInfos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.generalInfo = action.payload; // Sửa từ state.couple thành state.generalInfo
            })
            .addCase(fetchGeneralInfos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(updateGeneralInfo.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateGeneralInfo.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.generalInfo = action.payload;
            })
            .addCase(updateGeneralInfo.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export default getGeneralInfo.reducer;
