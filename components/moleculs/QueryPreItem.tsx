import { Box, ClockSVG, LupeSVG } from 'components';
import classname from 'classnames';
import { useRouter } from 'next/router';
import type { PRODUCT } from 'Types/product';
import { HTMLAttributes, useMemo, memo, useCallback, MouseEvent } from 'react';
import { setItemLocal } from 'utils/utilsFn';
import { useAppDispatch, AppDispatch } from 'redux/rootStore';
import {
    changeVisitedStatus,
    updateLocalQuery,
    transferQueryToDetail,
    fillQueryFromVisited,
    setStartQueryTime,
    setEndQueryTime,
    setCountQueryTime,
    setLastQuery,
} from 'redux/slices/querySlice';
import { inputClickFalse } from 'redux/slices/showBox';
import { axiosHandlerStatus, axiosHandler } from 'axios_handler/handler';
type QueryPreItems = PRODUCT & HTMLAttributes<HTMLDivElement>;
export default memo(function QueryPreItem({
    product_name,
    manufacturer,
    product_description,
    id,
    visited,
}: QueryPreItems): JSX.Element {
    const dispatch: AppDispatch = useAppDispatch();
    const router = useRouter();
    const iconClasses = useMemo(
        () =>
            classname({
                'w-4 h-4': true,
                hidden: !visited,
                block: visited,
            }),
        [visited]
    );
    const lupeClasses = useMemo(
        () =>
            classname({
                'w-5 h-5': true,
                hidden: visited,
                block: !visited,
            }),
        [visited]
    );

    const deleteClasses = useMemo(
        () =>
            classname({
                'cursor-pointer text-xs hover:underline hover:underline-offset-1': true,
                hidden: !visited,
                block: visited,
            }),
        [visited]
    );

    const deleteItem = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();
            dispatch(changeVisitedStatus(id));
        },
        [dispatch, id]
    );

    const addAsVisited = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();
            dispatch(setStartQueryTime(Date.now()));
            axiosHandler(product_name.split(' ')[0], 'countQueryDocuments').then(d => dispatch(setCountQueryTime(d)));
            if (!visited) {
                dispatch(setStartQueryTime(Date.now()));
                setItemLocal({
                    id: id,
                    manufacturer: manufacturer,
                    product_name: product_name,
                    product_description: product_description,
                    visited: true,
                });
                dispatch(updateLocalQuery(id));
                axiosHandlerStatus('updateVisited', id, '1').then(res => {
                    if (res) {
                        dispatch(setLastQuery(product_name.split(' ')[0]));
                        dispatch(setEndQueryTime(Date.now()));
                        router.push({
                            pathname: '/detail/preview/',
                            query: { q: product_name, brand: manufacturer, id: id },
                        });
                        dispatch(transferQueryToDetail());
                    }
                });
            }
            if (visited) {
                axiosHandler(product_name.split(' ')[0], 'findProduct').then(res => {
                    if (res) {
                        dispatch(setEndQueryTime(Date.now()));
                        dispatch(fillQueryFromVisited(res));
                        dispatch(setLastQuery(product_name.split(' ')[0]));
                        router.push({
                            pathname: '/detail/preview/',
                            query: { q: product_name, brand: manufacturer, id: id },
                        });
                    }
                });
            }
            dispatch(inputClickFalse());
        },
        [dispatch, id, manufacturer, product_name, visited, router, product_description]
    );

    return (
        <Box className="flex justify-between items-center gap-3 text-white hover:bg-white/10 py-1.5 px-4 cursor-pointer">
            <Box className="flex gap-3">
                <Box className="w-6 h-6 flex items-center">
                    <ClockSVG className={iconClasses} />
                    <LupeSVG className={lupeClasses} />
                </Box>
                <p onClick={addAsVisited}>{product_name}</p>
            </Box>

            <p onClick={deleteItem} className={deleteClasses}>
                Delete
            </p>
        </Box>
    );
});
