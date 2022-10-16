import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/counter/navigationSlice";

export default configureStore({
    reducer: {
        navigation: navigationReducer,
    },
});
