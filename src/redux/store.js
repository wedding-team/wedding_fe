import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import weddingEventReducer from "./weddingEvent/weddingEventSlice";
import weddingInvitationReducer from "./weddingInvitation/weddingInvitationSlice";
import loveStoryReducer from "./loveStory/loveStorySlice";
import adminReducer from "./admin/adminSlice";
import templateReducer from "./template/templateSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        weddingEvents: weddingEventReducer,
        weddingInvitations: weddingInvitationReducer,
        loveStories: loveStoryReducer,
        templates: templateReducer,
    },
});

export default store;
