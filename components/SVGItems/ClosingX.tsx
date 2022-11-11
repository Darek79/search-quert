import { SVGAttributes } from 'react';

interface ClosingXI extends SVGAttributes<SVGElement> {
    clickFn?: () => void;
}

export default function ClosingX({ ...rest }: ClosingXI): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
