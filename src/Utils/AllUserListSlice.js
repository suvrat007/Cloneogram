import {createSlice} from "@reduxjs/toolkit";
import followingListSlice from "./followingListSlice";

const AllUserListSlice = createSlice({
    name: "AllUserList",
    initialState: {
        users: [],
    },
    reducers: {
        AddUsers: (state, action) => {
            state.users.push(action.payload);
        }
    }
})

export const {AddUsers} =AllUserListSlice.actions;
export default AllUserListSlice.reducer;