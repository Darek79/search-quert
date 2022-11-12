import Link from 'next/link';
import { HTMLAttributes } from 'react';
import type { PRODUCT } from 'Types/product';
type SearchResultItemI = HTMLAttributes<HTMLDivElement> & PRODUCT;

export default function SearchResultItem({ product_description, product_name }: SearchResultItemI): JSX.Element {
    return (
        <div className="text-slate-300">
            <h4 className="text-xs">{`https://www.amazon.com/s?k=${product_name}`}</h4>
            <Link href={`https://www.amazon.com/s?k=${product_name}`}>
                <p className="text-sky-400 hover:underline cursor-pointer text-xl">{product_name}</p>
            </Link>
            <p className="pt-1">{product_description}</p>
        </div>
    );
}
