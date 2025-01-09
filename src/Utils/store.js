import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import followingListSlice from "./followingListSlice";
import AllUserListSlice from "./AllUserListSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        following: followingListSlice,
        userList: AllUserListSlice,
    },
})
export default store;