import { createSlice } from "@reduxjs/toolkit";   

export const counterWithToolkit = createSlice({  //COUNTERSTATE USANDO REDUX TOOLKIT
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,
        reset: (state, action) => 0
    }
})