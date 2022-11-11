import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PRODUCT } from 'Types/product';

interface InitStateI {
    clickedInput: boolean;
    queryResults: PRODUCT[];
}

const initState: InitStateI = {
    clickedInput: false,
    queryResults: [],
};

const querySlice = createSlice({
    name: 'querySlice',
    initialState: initState,
    reducers: {
        inputClick(state) {
            state.clickedInput = !state.clickedInput;
        },
        queryResults(state, action: PayloadAction<PRODUCT[]>) {
            state.queryResults = action.payload;
        },
    },
});

export const { inputClick, queryResults } = querySlice.actions;
export default querySlice.reducer;
