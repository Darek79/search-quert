import { useAppSelector, RootState, useAppDispatch, AppDispatch } from 'redux/rootStore';
import { useEffect } from 'react';
import { axiosHanlder } from 'axios_handler/handler';
import { querySetter } from 'redux/slices/querySlice';

import { getItemLocal } from 'utils/utilsFn';
// interface QueryComponentI {}

export default function QueryComponent(): JSX.Element {
    const inputValue = useAppSelector((state: RootState) => state.inputSlice);
    const dispatch: AppDispatch = useAppDispatch();
    useEffect(() => {
        if (inputValue) {
            axiosHanlder(inputValue).then(d => dispatch(querySetter(d)));
        }
        // if (!inputValue) {
        //     const arr = getItemLocal();
        //     if (!arr) {
        //         dispatch(queryResults([]));
        //     }
        //     console.log(arr);
        // }
    }, [inputValue, dispatch]);
    return <></>;
}
