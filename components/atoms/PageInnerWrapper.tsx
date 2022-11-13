import { HTMLAttributes, createElement } from 'react';
import { useAppDispatch, AppDispatch } from 'redux/rootStore';
import { inputClickFalse } from 'redux/slices/showBox';
// interface PageInnerWrapperI {}

export default function PageInnerWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const dispatch: AppDispatch = useAppDispatch();
    function closeModal() {
        dispatch(inputClickFalse());
    }
    return createElement(
        'div',
        {
            onClick: closeModal,
            className: 'bg-inherit max-w-screen-xl m-auto',
            ...rest,
        },
        children
    );
}
