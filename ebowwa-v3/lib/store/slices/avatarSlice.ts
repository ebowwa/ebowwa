import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface AvatarState {
  position: [number, number, number];
  rotation: [number, number, number];
  isAnimating: boolean;
  currentAnimation: string | null;
}

const initialState: AvatarState = {
  position: [0, -1, 0],
  rotation: [0, Math.PI, 0],
  isAnimating: false,
  currentAnimation: null,
};

export const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<[number, number, number]>) => {
      state.position = action.payload;
    },
    setRotation: (state, action: PayloadAction<[number, number, number]>) => {
      state.rotation = action.payload;
    },
    setAnimation: (state, action: PayloadAction<string | null>) => {
      state.currentAnimation = action.payload;
      state.isAnimating = !!action.payload;
    },
  },
});

export const { setPosition, setRotation, setAnimation } = avatarSlice.actions;

export const selectAvatarState = (state: RootState) => state.avatar;

export default avatarSlice.reducer;