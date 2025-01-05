import {createSlice} from "@reduxjs/toolkit";

const followSlice = createSlice({
    name: "follow",
    initialState: {
        isFollowing: false,
    },
    reducers: {
        toggleFollowing: (state) => {
            state.isFollowing = !state.isFollowing;
        },
    }
})
export const {toggleFollowing} = followSlice.actions;
export default followSlice.reducer;