import { HTMLAttributes, createElement } from 'react';

type HtmlTag = 'div' | 'section';

interface BoxI extends HTMLAttributes<HTMLDivElement> {
    htmlTag?: HtmlTag;
}

export default function Box({ htmlTag = 'div', children, ...rest }: BoxI): JSX.Element {
    return createElement(htmlTag, { ...rest }, children);
}
