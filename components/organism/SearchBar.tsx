import { Box, QueryPreItemBox, SearchbarItem } from 'components';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { useAppSelector, RootState } from 'redux/rootStore';

export default function Searchbar({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const clickedInput = useAppSelector((state: RootState) => state.showBox.clickedInput);
    const queryResults = useAppSelector((state: RootState) => state.querySlice.queryResults);

    const wrapperClasses = classnames({
        'max-w-2xl m-auto': true,
        'bg-pageMain': !clickedInput,
        'bg-bgInput rounded-2xl ': clickedInput,
    });

    const queryBoxClasses = classnames({
        hidden: !clickedInput,
        block: clickedInput,
        '[&>_div]:pt-1 [&>_div]:pb-3': queryResults.length,
    });

    return (
        <Box className={wrapperClasses} {...rest}>
            <SearchbarItem className="m-auto flex gap-3 p-3 items-center rounded-2xl w-full max-w-2xl border-2 text-lg group bg-inherit border-bgInput hover:bg-bgInput" />
            <Box className={queryBoxClasses}>
                <QueryPreItemBox className="max-w-2xl m-auto grid gap-1 bg-inherit rounded-b-2xl" />
            </Box>
        </Box>
    );
}
