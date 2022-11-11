import { HTMLAttributes, createElement } from 'react';

// interface PageWrapperI {}

export default function PageWrapper({ children, ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return createElement('div', { className: 'bg-pageMain h-screen', ...rest }, children);
}
