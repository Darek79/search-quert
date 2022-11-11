import { Input, LupeSVG, ClosingX } from 'components';
import { useRef, KeyboardEvent, FormEvent, useEffect, HTMLAttributes } from 'react';
import { useAppDispatch, AppDispatch } from 'redux/rootStore';
import { resetValue } from 'redux/slices/inputSlice';
import { inputClick } from 'redux/slices/querySlice';
import { getQueryTime } from 'utils/getQueryTime';

// interface InputI {}

export default function Searchbar({ ...rest }: HTMLAttributes<HTMLFormElement>): JSX.Element {
    const dispatch: AppDispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    function getInput(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function getKeyboardEnter(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            console.log(inputRef.current?.value);
            getQueryTime.pushTime();
            getQueryTime.fetching = true;
            console.log(getQueryTime.fetching);
        }
    }

    function clearInput() {
        dispatch(resetValue());
    }
    function showQueries() {
        dispatch(inputClick());
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={getInput} onKeyDown={getKeyboardEnter} onClick={showQueries} ref={formRef} {...rest}>
            <LupeSVG className="svgClasses" />
            <Input
                type="text"
                autoFocus={true}
                ref={inputRef}
                inputStyles="peer placeholder:text-pageMain placeholder:group-hover:text-bgInput"
                placeholder="Type here"
            />
            <ClosingX
                onClick={clearInput}
                className="svgClasses visible peer-placeholder-shown:invisible hover:cursor-pointer"
            />
        </form>
    );
}
