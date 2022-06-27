import { createSlice } from "@reduxjs/toolkit";   

export const todoList = createSlice({  
    name: 'todoList',
    initialState: [],
    reducers: {
        add: (state, action) =>  [...state, action.payload], //  add: (state, action) => {state.push(action.payload)} ---> Può essere scritto anche così perchè si sta mutando lo state pushando qualcosa, ciò è posssibile grazie ad IMMER.
        remove: (state, action) => state.filter((item)=> item !== action.payload),
        edit: (state, action) => state.map(item => {                                              
            if (item.id === action.payload.id){
                return {...item, ...action.payload.data}
            }

            return item}) 
    }
})