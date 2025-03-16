import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WeddingEventApi from "../../Apis/WeddingEventApi";

export const fetchWeddingEvents = createAsyncThunk(
    "weddingEvents/fetchAll",
    async () => {
        const response = await WeddingEventApi.getAllWeddingEvents();
        return response.data.body;
    }
);

export const saveWeddingEvent = createAsyncThunk(
    "weddingEvents/save",
    async ({ id, data }, { dispatch }) => {
        let response;
            response = await WeddingEventApi.saveWeddingEvent(id, data);
        dispatch(fetchWeddingEvents());
        return response.data.body;
    }
);

export const deleteWeddingEvent = createAsyncThunk(
    "weddingEvents/delete",
    async (id, { dispatch }) => {
        await WeddingEventApi.deleteWeddingEvent(id);
        dispatch(fetchWeddingEvents());
    }
);

const weddingEventSlice = createSlice({
    name: "weddingEvents",
    initialState: {
        events: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeddingEvents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeddingEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(fetchWeddingEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default weddingEventSlice.reducer;
