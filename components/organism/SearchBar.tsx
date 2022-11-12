import { Box, QueryPreItemBox, SearchbarItem } from 'components';
import { HTMLAttributes, memo, useEffect } from 'react';
import classnames from 'classnames';
import { useAppDispatch, AppDispatch, useAppSelector, RootState } from 'redux/rootStore';
import { queryResults } from 'redux/slices/querySlice';

export default function Searchbar({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { clickedInput } = useAppSelector((state: RootState) => state.showBox);
    const { queryResults } = useAppSelector((state: RootState) => state.querySlice);

    const wrapperClasses = classnames({
        'max-w-2xl m-auto': true,
        'bg-pageMain': !clickedInput,
        '[&>_div]:py-0': !queryResults.length,
        'bg-bgInput rounded-2xl [&>_div]:py-3': clickedInput || queryResults.length,
    });

    return (
        <Box className={wrapperClasses} {...rest}>
            <SearchbarItem className="m-auto flex gap-3 p-3 items-center rounded-2xl w-full max-w-2xl border-2 text-lg group bg-inherit border-bgInput hover:bg-bgInput" />
            <QueryPreItemBox className="max-w-2xl m-auto grid gap-1 bg-inherit rounded-b-2xl" />
        </Box>
    );
}
