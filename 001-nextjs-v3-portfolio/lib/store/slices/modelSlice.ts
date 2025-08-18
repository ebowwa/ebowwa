import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ModelState {
  isLoaded: boolean;
  currentAnimation: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  section: string;
}

const initialState: ModelState = {
  isLoaded: false,
  currentAnimation: 'idle',
  position: [0, 0, 2],
  rotation: [0, 0, 0],
  scale: 1,
  section: 'hero'
};

const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setModelLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    updateModelPosition: (state, action: PayloadAction<[number, number, number]>) => {
      state.position = action.payload;
    },
    updateModelRotation: (state, action: PayloadAction<[number, number, number]>) => {
      state.rotation = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
      // Update model position based on section
      switch (action.payload) {
        case 'hero':
          state.position = [0, 0, 2];
          state.rotation = [0, 0, 0];
          state.currentAnimation = 'idle';
          break;
        case 'vision':
          state.position = [2, 0, 2];
          state.rotation = [0, -Math.PI / 4, 0];
          state.currentAnimation = 'thinking';
          break;
        case 'journey':
          state.position = [-2, 0, 2];
          state.rotation = [0, Math.PI / 4, 0];
          state.currentAnimation = 'walking';
          break;
        // Add more sections as needed
      }
    }
  }
});

export const {
  setModelLoaded,
  updateModelPosition,
  updateModelRotation,
  setCurrentSection
} = modelSlice.actions;

export const selectModelState = (state: RootState) => state.model;

export default modelSlice.reducer;