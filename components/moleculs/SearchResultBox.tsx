import { Box, SearchResultItem } from 'components';
import { HTMLAttributes, memo } from 'react';
import { useAppSelector, RootState } from 'redux/rootStore';

export default memo(function SearchResultBox({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const detailResults = useAppSelector((state: RootState) => state.querySlice.detailResults);
    return (
        <Box {...rest}>
            <>{console.log(detailResults, '11111111111')}</>
            {detailResults &&
                detailResults.map(el => (
                    <SearchResultItem
                        key={el.id}
                        id={el.id}
                        manufacturer={el.manufacturer}
                        visited={el.visited}
                        product_name={el.product_name}
                        product_description={el.product_description}
                    />
                ))}
        </Box>
    );
});
