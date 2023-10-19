import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {},
    reducers: {

    },
    extraReducers: {}
})

export const userReducer = slice.reducer;
export const userActions = slice.actions;