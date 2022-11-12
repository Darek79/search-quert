import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputSclice {
    value: string;
}

const initState: InputSclice = {
    value: '',
};

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState: initState,
    reducers: {
        inputValue(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
        resetValue(state) {
            state.value = '';
        },
    },
});

export const { inputValue, resetValue } = inputSlice.actions;
export default inputSlice.reducer;
