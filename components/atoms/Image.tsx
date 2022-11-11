import { HTMLAttributes, createElement } from 'react';

interface ImageI extends HTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
}

export default function Image({ alt, src, children, ...rest }: ImageI): JSX.Element {
    return createElement('img', {alt:alt,src:src,...rest},children);
}
