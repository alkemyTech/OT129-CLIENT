import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        newsList: [],
    },
    reducers: {
        showList(state, action) {
            state.newsList = action.payload.newsList;
        },
    }
});


export const newsActions = newsSlice.actions;

export default newsSlice;