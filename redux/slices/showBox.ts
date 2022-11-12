import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PRODUCT } from 'Types/product';

interface InitStateI {
    clickedInput: boolean;
}

const initState: InitStateI = {
    clickedInput: false,
};

const showBox = createSlice({
    name: 'showBox',
    initialState: initState,
    reducers: {
        inputClick(state) {
            state.clickedInput = !state.clickedInput;
        },
    },
});

export const { inputClick } = showBox.actions;
export default showBox.reducer;
