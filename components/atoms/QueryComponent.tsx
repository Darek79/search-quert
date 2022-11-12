import { useAppSelector, RootState, useAppDispatch, AppDispatch } from 'redux/rootStore';
import { useEffect } from 'react';
import { axiosHanlder, axiosHanlderStatus } from 'axios_handler/handler';
import { querySetter, removeFromQueryAndDB } from 'redux/slices/querySlice';
import { getItemLocal, deleteLocalItem } from 'utils/utilsFn';

export default function QueryComponent(): JSX.Element {
    const inputValue = useAppSelector((state: RootState) => state.inputSlice.value);
    const itemToRemove = useAppSelector((state: RootState) => state.querySlice.itemToRemove);
    const dispatch: AppDispatch = useAppDispatch();
    useEffect(() => {
        if (inputValue) {
            axiosHanlder(inputValue, 'findProduct').then(d => dispatch(querySetter(d)));
        }
    }, [inputValue, dispatch]);

    useEffect(() => {
        if (itemToRemove) {
            const arr = deleteLocalItem(itemToRemove);
            if (itemToRemove.length === 13) {
                dispatch(querySetter(arr!));
            }
            if (itemToRemove.length > 13) {
                dispatch(removeFromQueryAndDB(itemToRemove));
                axiosHanlderStatus('updateVisited', itemToRemove, '');
            }
        }
    }, [itemToRemove, dispatch]);

    useEffect(() => {
        const arr = getItemLocal();
        if (arr) {
            console.log('item');
            dispatch(querySetter(arr));
        }
    }, [dispatch]);

    return <></>;
}
