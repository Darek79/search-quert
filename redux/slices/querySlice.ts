import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PRODUCT } from 'Types/product';

interface InitStateI {
    queryResults: PRODUCT[];
    detailResults: PRODUCT[];
    itemToRemove: string;
    start: number;
    end: number;
    count: number;
    lastQuery: string;
}

const initState: InitStateI = {
    queryResults: [],
    detailResults: [],
    itemToRemove: '',
    start: 0,
    end: 0,
    count: 0,
    lastQuery: '',
};

const querySlice = createSlice({
    name: 'querySlice',
    initialState: initState,
    reducers: {
        querySetter(state, action: PayloadAction<PRODUCT[]>) {
            state.queryResults = [...action.payload.reverse()];
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
            state.detailResults = state.queryResults.slice();
        },
        fillQueryFromVisited(state, action: PayloadAction<PRODUCT[]>) {
            state.detailResults = [...action.payload];
        },
        setStartQueryTime(state, action: PayloadAction<number>) {
            state.start = action.payload;
        },
        setEndQueryTime(state, action: PayloadAction<number>) {
            state.end = action.payload;
        },
        setCountQueryTime(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
        loadMore(state, action: PayloadAction<PRODUCT[]>) {
            state.detailResults = [...state.detailResults, ...action.payload];
        },
        setLastQuery(state, action: PayloadAction<string>) {
            state.lastQuery = action.payload;
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
    fillQueryFromVisited,
    setStartQueryTime,
    setCountQueryTime,
    setEndQueryTime,
    loadMore,
    setLastQuery,
} = querySlice.actions;
export default querySlice.reducer;
