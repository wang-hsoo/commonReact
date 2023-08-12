import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    "path": "/menu1",
}


const slice = createSlice({
    name: "path",
    initialState,
    reducers:{
        add:(state, action) => {
            state.path = action.payload.path
        }
    }
})



export const { add } = slice.actions;

export default slice.reducer;