import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PRODUCT } from 'Types/product';

interface InitStateI {
    queryResults: PRODUCT[];
    detailResults: PRODUCT[];
    itemToRemove: string;
}

const initState: InitStateI = {
    queryResults: [],
    detailResults: [],
    itemToRemove: '',
};

const querySlice = createSlice({
    name: 'querySlice',
    initialState: initState,
    reducers: {
        querySetter(state, action: PayloadAction<PRODUCT[]>) {
            console.log(action.payload, 'payload');
            state.queryResults = action.payload.reverse();
        },
        resetQuery(state) {
            state.queryResults = [];
        },
        changeVisitedStatus(state, action: PayloadAction<string>) {
            state.itemToRemove = action.payload;
        },
        removeFromQueryAndDB(state, action: PayloadAction<string>) {
            state.queryResults = state.queryResults.filter(el => el.id !== action.payload);
        },
        updateLocalQuery(state, action: PayloadAction<string>) {
            state.queryResults = state.queryResults.map(el => {
                if (el.id === action.payload) {
                    el.visited = true;
                    return el;
                } else {
                    return el;
                }
            });
        },
        transferQueryToDetail(state) {
            console.log('here');
            state.detailResults = state.queryResults.slice();
        },
    },
});

export const {
    querySetter,
    resetQuery,
    changeVisitedStatus,
    removeFromQueryAndDB,
    updateLocalQuery,
    transferQueryToDetail,
} = querySlice.actions;
export default querySlice.reducer;
