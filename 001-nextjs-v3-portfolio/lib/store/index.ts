import { configureStore } from '@reduxjs/toolkit';
import avatarReducer from './slices/avatarSlice';
import navigationReducer from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;