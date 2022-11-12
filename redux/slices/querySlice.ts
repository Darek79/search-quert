import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PRODUCT } from 'Types/product';

interface InitStateI {
    queryResults: PRODUCT[];
}

const initState: InitStateI = {
    queryResults: [],
};

const querySlice = createSlice({
    name: 'querySlice',
    initialState: initState,
    reducers: {
        querySetter(state, action: PayloadAction<PRODUCT[]>) {
            console.log(action.payload, 'payload');
            state.queryResults = action.payload;
        },
        resetQuery(state) {
            state.queryResults = [];
        },
    },
});

export const { querySetter, resetQuery } = querySlice.actions;
export default querySlice.reducer;
