import { HTMLAttributes, createElement } from 'react';
import { useAppDispatch, AppDispatch } from 'redux/rootStore';
import { inputClickFalse } from 'redux/slices/showBox';
// interface PageInnerWrapperI {}

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const dispatch: AppDispatch = useAppDispatch();
    function closeModal() {
        dispatch(inputClickFalse());
    }
    return createElement(
        'div',
        {
            onClick: closeModal,
            className: 'bg-pageMain min-h-screen p-3 md:px-5 lg:px-0',
            ...rest,
        },
        children
    );
}
