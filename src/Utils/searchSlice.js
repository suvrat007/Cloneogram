import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isSearchOn: false,
    },
    reducers: {
        toggleSearchDisplay: (state) => {
            state.isSearchOn = !state.isSearchOn;
        },
        setSearchDisplay: (state, action) => {
            state.isSearchOn = action.payload;
        },
    },
});

export const {toggleSearchDisplay,setSearchDisplay} = searchSlice.actions;
export default searchSlice.reducer;