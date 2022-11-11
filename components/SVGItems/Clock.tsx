import { SVGAttributes } from 'react';

export default function ClockSVG({ ...rest }: SVGAttributes<SVGElement>): JSX.Element {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
    );
}
