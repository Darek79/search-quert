import { Box } from 'components';
import { useAppSelector, RootState } from 'redux/rootStore';

export default function ShowQueryTime(): JSX.Element {
    const start = useAppSelector((state: RootState) => state.querySlice.start);
    const end = useAppSelector((state: RootState) => state.querySlice.end);
    const count = useAppSelector((state: RootState) => state.querySlice.count);
    return (
        <Box className="py-3 flex gap-3 text-slate-300 max-w-2xl m-auto">
            <p>About {count} Documents</p>
            <p>Found in {`${(end - start) / 1000} seconds`}</p>
        </Box>
    );
}
