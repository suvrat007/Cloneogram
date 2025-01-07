import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import followingListSlice from "./followingListSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        following: followingListSlice,
    },
})
export default store;