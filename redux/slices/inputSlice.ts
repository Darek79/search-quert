import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState: '',
    reducers: {
        inputValue(state, action: PayloadAction<string>) {
            return action.payload;
        },
        resetValue() {
            return '';
        },
    },
});

export const { inputValue, resetValue } = inputSlice.actions;
export default inputSlice.reducer;
