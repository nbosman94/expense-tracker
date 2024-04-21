import { create } from "zustand";

export const useCategoryStore = create((set) => ({

    categoryOptions: ["Food", "Bills", "Petrol"],
    addCategory: (category) => set((state) =>({ categoryOptions: [
        ...state.categoryOptions,{
            category: category
        }]})),
}))