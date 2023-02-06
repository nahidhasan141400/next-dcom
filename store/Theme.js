import { createSlice } from "@reduxjs/toolkit";

const initState = {
    color:"blue",
};

const theam = createSlice({
    name:"theam",
    initialState:initState,
    reducers:{
        change (state,action){
            
            state.color = action.payload;
        }
    }
});
export const { change } = theam.actions;
export default theam.reducer;