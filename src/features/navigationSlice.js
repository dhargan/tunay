import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name: "navigation",
    initialState: {
        value: "about",
    },
    reducers: {
        about: (state) => {
            state.value = "about";
        },
        education: (state) => {
            state.value = "education";
        },
        work: (state) => {
            state.value = "work";
        },
        hobbies: (state) => {
            state.value = "hobbies";
        },
    },
});

export const { about, education, work, hobbies } = navigationSlice.actions;
export default navigationSlice.reducer;
