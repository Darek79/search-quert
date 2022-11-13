import { createSlice } from '@reduxjs/toolkit';

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
        inputClickTrue(state) {
            if (!state.clickedInput) {
                state.clickedInput = true;
            }
        },
        inputClickFalse(state) {
            if (state.clickedInput) {
                state.clickedInput = false;
            }
        },
    },
});

export const { inputClickTrue, inputClickFalse } = showBox.actions;
export default showBox.reducer;
