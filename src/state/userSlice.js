import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    "auth": {
        "name": null,
        "createdate": null,
        "auth" : null
    }
}


const slice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        auth:(state, action) => {
            state.path = action.payload.path
        }
    }
})



export const { auth } = slice.actions;

export default slice.reducer;