import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import weddingEventReducer from "./weddingEvent/weddingEventSlice";
import weddingInvitationReducer from "./weddingInvitation/weddingInvitationSlice";
import loveStoryReducer from "./loveStory/loveStorySlice";
import adminReducer from "./admin/adminSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        weddingEvents: weddingEventReducer,
        weddingInvitations: weddingInvitationReducer,
        loveStories: loveStoryReducer,
    },
});

export default store;
