import { InputHTMLAttributes, createElement, forwardRef, useMemo, useCallback, ChangeEvent } from 'react';
import { useAppDispatch, AppDispatch, useAppSelector, RootState } from 'redux/rootStore';
import { inputValue } from 'redux/slices/inputSlice';
import classnames from 'classnames';

interface InputI extends InputHTMLAttributes<HTMLInputElement> {
    inputStyles?: string;
}

export default forwardRef(function Input({ children, inputStyles, ...rest }: InputI, inputRef): JSX.Element {
    // const [state, setState] = useState<string>('');
    const value = useAppSelector((state: RootState) => state.inputSlice.value);
    const dispatch: AppDispatch = useAppDispatch();

    const stateHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(inputValue(event.currentTarget.value));
        },
        [dispatch]
    );

    const inputClasses = useMemo(() => {
        return classnames({
            'appearance-none w-full outline-none bg-transparent text-white': true,
            [`${inputStyles}`]: inputStyles,
        });
    }, [inputStyles]);

    return createElement(
        'input',
        { className: inputClasses, onChange: stateHandler, value: value, ref: inputRef, ...rest },
        children
    );
});
