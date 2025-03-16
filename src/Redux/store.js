import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import weddingEventReducer from "./weddingEvent/weddingEventSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        weddingEvents: weddingEventReducer,
    },
});

export default store;
