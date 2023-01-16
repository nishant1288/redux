import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const customReducer = createReducer(initialState, {

    increment : (state) => {
        state.value = state.value + 1;
    },

    incrementByValue : (state, action) =>
    {
        state.value = state.value + action.payload;
    },

    decrement : (state) => {
        state.value = state.value - 1;
    },    
})
