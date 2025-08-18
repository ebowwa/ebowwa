import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface NavigationState {
  currentSection: string;
  previousSection: string | null;
  isTransitioning: boolean;
}

const initialState: NavigationState = {
  currentSection: 'hero',
  previousSection: null,
  isTransitioning: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.previousSection = state.currentSection;
      state.currentSection = action.payload;
    },
    setTransitioning: (state, action: PayloadAction<boolean>) => {
      state.isTransitioning = action.payload;
    },
  },
});

export const { setCurrentSection, setTransitioning } = navigationSlice.actions;

export const selectNavigationState = (state: RootState) => state.navigation;

export default navigationSlice.reducer;