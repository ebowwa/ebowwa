import create, { SetState, GetState } from "zustand";

interface StoreState {
    gravity: number;
    setGravity: (gravity: number) => void;
}

export const useStore = create<StoreState>((set: SetState<StoreState>, get: GetState<StoreState>) => ({
    gravity: 90,
    setGravity: (gravity: number) => set({ gravity }),
}));