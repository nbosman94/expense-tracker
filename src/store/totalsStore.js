import {create} from "zustand";

export const useTotalStore = create((set) =>({
    total: 0,
    increaseTotal: (amount) => set((state) => ({total: parseFloat(((state.total+ Number(amount))*100)/100)})),
    decreaseTotal: (amount) => set((state)=> ({total:  parseFloat(((state.total - Number(amount))*100)/100)}))
}))