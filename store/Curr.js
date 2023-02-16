import { createSlice } from "@reduxjs/toolkit";

const initState = {
    cur:"nun"
};

const curr = createSlice({
    name:"curr",
    initialState:initState,
    reducers:{
        Curchange (state,action){
            
            state.cur = action.payload;
        }
    }
});
export const { Curchange } = curr.actions;
export default curr.reducer;