import { create } from 'zustand'

interface State {
    ready: boolean;
    isReady: () => void;
}

//using state management in order to wait for the render of the page before using gsap

export const useStore = create<State>((set) => ({
    ready: false,
    isReady: () => set({ ready: true }),
}))
