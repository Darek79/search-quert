import { useAppSelector, RootState, useAppDispatch, AppDispatch } from 'redux/rootStore';
import { useEffect } from 'react';
import { axiosHanlder } from 'axios_handler/handler';
import { queryResults } from 'redux/slices/querySlice';
// interface QueryComponentI {}

export default function QueryComponent(): JSX.Element {
    const inputValue = useAppSelector((state: RootState) => state.inputSlice);
    const dispatch: AppDispatch = useAppDispatch();
    useEffect(() => {
        if (inputValue) {
            axiosHanlder(inputValue).then(d => dispatch(queryResults(d)));
        }
    }, [inputValue, dispatch]);
    return <></>;
}
