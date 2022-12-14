import { Box, QueryPreItem } from 'components';
import { HTMLAttributes, memo } from 'react';
import { useAppSelector, RootState } from 'redux/rootStore';

export default memo(function QueryPreItemWrapper({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const queryResults = useAppSelector((state: RootState) => state.querySlice.queryResults);
    return (
        <Box {...rest}>
            {queryResults &&
                queryResults.map(el => (
                    <QueryPreItem
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
