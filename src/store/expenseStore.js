import {create} from "zustand";
import {produce} from "immer";
import { MdFastfood } from "react-icons/md";



// const initialExpenseList = {
//     expenseList:{
//       id: 0,
//       amount: 0,
//       categories: "Food"
//     }
//   }


export const useExpenseStore = create((set) => ({

    expenseList: [],
    addExpense: (amount, category) => set((state) => ({expenseList: [
        ...state.expenseList,{
            id: Date.now(),
            amount: amount, 
            category: category
        }]})),
    deleteExpense: (id) => set((state) => ({expenseList: state.expenseList.filter(expense => expense.id !== id)}))
   
  
}));
// export const useExpenseStore = create((set) => {
//     expenseList: [],
//     addExpense: (expense) => set((state) => ({expenseList: [...state.expenseList, expense]})),
//     deleteExpense: (expenseId) => set((state) => ({expenseList: state.expenseList.filter(expense => expense.id !== expenseId)}))
// })


// ...initialExpenseList,
// updateAmount:(amount) =>
// set(
//     produce((state) => {
//         state.expenseList.amount = amount;
//     })
// ),
// updateCategory:(category) =>
// set(
//     produce((state) => {
//         state.expenseList.categories.type = category;
//     })
// ),
// updateIcon: (icon) =>
// set(
//     produce((state) => {
//         state.expenseList.categories.icon = icon;
//     })
// ),

// addExpense: (expense) => set((state) => ({expenseList: [...state.expenseList, expense]})),