import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import followSlice from "./followSlice";

const store = configureStore({
    reducer: {
        search: searchSlice,
        follow: followSlice,
    },
})
export default store;