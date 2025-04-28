import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import weddingEventReducer from "./weddingEvent/weddingEventSlice";
import coupleReducer from "./couple/coupleSlice";
import loveStoryReducer from "./loveStory/loveStorySlice";
import adminReducer from "./admin/adminSlice";
import templateReducer from "./template/templateSlice";
import generalInfoReducer from "./generalInfo/generalInfoSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        weddingEvents: weddingEventReducer,
        couples: coupleReducer,
        generalInfos: generalInfoReducer,
        loveStories: loveStoryReducer,
        templates: templateReducer,
    },
});

export default store;
