import {create} from "zustand";

export const useTotalStore = create((set) =>({
    total: 0,
    increaseTotal: (amount) => set((state) => ({total: state.total+ Number(amount)})),
    decreaseTotal: (amount) => set((state)=> ({total: state.total - Number(amount)}))
}))