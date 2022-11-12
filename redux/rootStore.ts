import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import inputSlice from 'redux/slices/inputSlice';
import querySlice from 'redux/slices/querySlice';
import showBox from './slices/showBox';
const store = configureStore({
    reducer: {
        inputSlice,
        querySlice,
        showBox,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
