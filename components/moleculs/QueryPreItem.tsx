import { Box, ClockSVG, LupeSVG } from 'components';
import Link from 'next/link';
import classname from 'classnames';
import { useRouter } from 'next/router';
import type { PRODUCT } from 'Types/product';
import { HTMLAttributes, useMemo, memo, useCallback, MouseEvent } from 'react';
import { setItemLocal } from 'utils/utilsFn';
import { deleteLocalItem } from 'utils/utilsFn';
import { useAppSelector, RootState, useAppDispatch, AppDispatch } from 'redux/rootStore';
import { changeVisitedStatus, updateLocalQuery, transferQueryToDetail } from 'redux/slices/querySlice';
import { inputClickTrue, inputClickFalse } from 'redux/slices/showBox';
import { resetValue } from 'redux/slices/inputSlice';
import { axiosHanlderStatus } from 'axios_handler/handler';
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
            if (!visited) {
                setItemLocal({
                    id: id,
                    manufacturer: manufacturer,
                    product_name: product_name,
                    product_description: product_description,
                    visited: true,
                });
                dispatch(updateLocalQuery(id));
                axiosHanlderStatus('updateVisited', id, '1').then(res => {
                    if (res) {
                        router.push({
                            pathname: '/detail/preview/',
                            query: { q: product_name, brand: manufacturer, id: id },
                        });
                        dispatch(transferQueryToDetail());
                    }
                });
                dispatch(inputClickFalse());
            }
            if (visited) {
                router.push({
                    pathname: '/detail/preview/',
                    query: { q: product_name, brand: manufacturer, id: id },
                });
            }
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
