import {createSlice} from "@reduxjs/toolkit";

const followingListSlice = createSlice({
    name: "followingList",
    initialState: {
        followingList:[],
        likedList:[],
        savedList:[],
    },
    reducers: {
        addFollowing: (state, action) => {
            state.followingList.push(action.payload);
        },
        unfollow: (state, action) => {
            state.followingList = state.followingList.filter(f => f !== action.payload);
        },
    }
})
export const {addFollowing, unfollow} =followingListSlice.actions;
export default followingListSlice.reducer;