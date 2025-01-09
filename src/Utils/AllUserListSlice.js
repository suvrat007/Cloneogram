import {createSlice} from "@reduxjs/toolkit";
import followingListSlice from "./followingListSlice";

const AllUserListSlice = createSlice({
    name: "AllUserList",
    initialState: {
        users: [],
        fetched: false,
    },
    reducers: {
        AddUsers: (state, action) => {
            state.users.push(action.payload);
            state.fetched = true;
        }
    }
})

export const {AddUsers} =AllUserListSlice.actions;
export default AllUserListSlice.reducer;