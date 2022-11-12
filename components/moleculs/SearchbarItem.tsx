import { Input, LupeSVG, ClosingX } from 'components';
import { useRouter } from 'next/router';
import { useRef, KeyboardEvent, FormEvent, useEffect, HTMLAttributes, memo, MouseEvent } from 'react';
import { useAppDispatch, AppDispatch } from 'redux/rootStore';
import { resetValue } from 'redux/slices/inputSlice';
import { resetQuery } from 'redux/slices/querySlice';
import { inputClickTrue, inputClickFalse } from 'redux/slices/showBox';
import { querySetter } from 'redux/slices/querySlice';
import { setItemLocal } from 'utils/utilsFn';
import { getItemLocal } from 'utils/utilsFn';

// interface InputI {}

export default memo(function SearchbarItem({ ...rest }: HTMLAttributes<HTMLFormElement>): JSX.Element {
    const dispatch: AppDispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    function getInput(event: FormEvent<HTMLFormElement>) {
        event.stopPropagation();
        event.preventDefault();
    }

    function getKeyboardEnter(event: KeyboardEvent) {
        event.stopPropagation();
        if (event.key === 'Enter' && inputRef.current?.value) {
            setItemLocal({
                id: String(Date.now()),
                manufacturer: '',
                product_description: '',
                product_name: inputRef.current?.value,
                visited: true,
            });
            router.push({
                pathname: '/detail/preview/',
                query: { q: inputRef.current?.value, brand: '', id: '' },
            });
        }
    }

    function clearInput(e: MouseEvent) {
        e.stopPropagation();
        console.log('clear');
        dispatch(resetValue());
        dispatch(resetQuery());
        dispatch(inputClickFalse());
        const arr = getItemLocal();
        if (arr) {
            dispatch(querySetter(arr));
        }
    }
    function showQueries(e: MouseEvent) {
        e.stopPropagation();
        dispatch(inputClickTrue());
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={getInput} onClick={showQueries} onKeyDown={getKeyboardEnter} ref={formRef} {...rest}>
            <LupeSVG className="svgClasses" />
            <Input
                type="text"
                autoFocus={true}
                ref={inputRef}
                inputStyles="peer placeholder:text-transparent"
                placeholder="Type here"
            />
            <ClosingX
                onClick={clearInput}
                className="svgClasses visible peer-placeholder-shown:invisible hover:cursor-pointer"
            />
        </form>
    );
});
