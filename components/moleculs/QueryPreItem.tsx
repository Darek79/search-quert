import { Box, ClockSVG, LupeSVG } from 'components';
import Link from 'next/link';
import classname from 'classnames';
import type { PRODUCT } from 'Types/product';
import { HTMLAttributes, useMemo } from 'react';
type QueryPreItems = PRODUCT & HTMLAttributes<HTMLDivElement>;

export default function QueryPreItem({ product_name, manufacturer, id, visited }: QueryPreItems): JSX.Element {
    const iconClasses = useMemo(
        () =>
            classname({
                'w-4 h-4': true,
                hidden: !visited,
                block: visited,
            }),
        [visited]
    );
    const lupeClasses = useMemo(
        () =>
            classname({
                'w-5 h-5': true,
                hidden: visited,
                block: !visited,
            }),
        [visited]
    );

    const deleteClasses = useMemo(
        () =>
            classname({
                'cursor-pointer text-xs hover:underline hover:underline-offset-1': true,
                hidden: !visited,
                block: visited,
            }),
        [visited]
    );
    return (
        <Box className="flex justify-between items-center gap-3 py-0.5 text-white hover:bg-white/10 px-3">
            <Link
                href={{
                    pathname: '/detail/preview/',
                    query: { q: product_name, brand: manufacturer, id: id },
                }}
            >
                <a>
                    <Box className="flex">
                        <Box className="w-6 h-6 flex items-center">
                            <ClockSVG className={iconClasses} />
                            <LupeSVG className={lupeClasses} />
                        </Box>
                        <p>{product_name}</p>
                    </Box>
                </a>
            </Link>
            <p className={deleteClasses}>Delete</p>
        </Box>
    );
}
