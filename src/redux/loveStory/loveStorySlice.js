import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoveStoryApi from "../../apis/LoveStoryApi";

export const fetchLoveStories = createAsyncThunk(
    "loveStories/fetchAll",
    async () => {
        const response = await LoveStoryApi.getAllLoveStory();
        return response.data.body;
    }
);

export const saveLoveStory = createAsyncThunk(
    "loveStories/save",
    async ({ id, data }, { dispatch }) => {
        let response = await LoveStoryApi.saveLoveStory(id, data);
        dispatch(fetchLoveStories());
        return response.data.body;
    }
);

export const deleteLoveStory = createAsyncThunk(
    "loveStories/delete",
    async (id, { dispatch }) => {
        await LoveStoryApi.deleteLoveStory(id);
        dispatch(fetchLoveStories());
    }
);

const loveStorySlice = createSlice({
    name: "loveStories",
    initialState: {
        stories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoveStories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLoveStories.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
            .addCase(fetchLoveStories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default loveStorySlice.reducer;
