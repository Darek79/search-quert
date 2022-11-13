import { useAppSelector, RootState, useAppDispatch, AppDispatch } from 'redux/rootStore';
import { loadMore } from 'redux/slices/querySlice';
import { axiosHandler } from 'axios_handler/handler';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function LoadMoreDocs(): JSX.Element {
    const [load, setLoad] = useState<boolean>(false);
    const lastQuery = useAppSelector((state: RootState) => state.querySlice.lastQuery);
    const detailResults = useAppSelector((state: RootState) => state.querySlice.detailResults);
    const count = useAppSelector((state: RootState) => state.querySlice.count);
    const dispatch: AppDispatch = useAppDispatch();

    function loadMoreDocuments() {
        setLoad(p => !p);
    }

    const wrapperClasses = classNames({
        'text-slate-300 text-xl border-2 w-fit cursor-pointer ml-5 mt-5 p-2': true,
        hidden: !detailResults.length,
        block: detailResults.length,
    });

    useEffect(() => {
        if (detailResults.length < count && load) {
            axiosHandler(lastQuery, 'findAndPaginate').then(d => dispatch(loadMore(d)));
            setLoad(p => !p);
        }
    }, [load, detailResults, count, dispatch, lastQuery]);

    return (
        <div className={wrapperClasses}>
            <p onClick={loadMoreDocuments}>Load More</p>
        </div>
    );
}
