import { Box, QueryPreItem } from 'components';
import { HTMLAttributes } from 'react';
import { useAppDispatch, AppDispatch, useAppSelector, RootState } from 'redux/rootStore';
import { queryResults } from 'redux/slices/querySlice';

const test = [
    {
        product_name: 'Kato (USA) 176-1308 F3B Denver & Rio Grande Western',
        manufacturer: 'Kato (USA)',
        id: '636d94f42c67bb80bf522ffe',
        visited: false,
    },
    {
        product_name: 'Kato 3060-2 EF65 500 (F Model) Electric Locomotive',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523001',
        visited: false,
    },
    {
        product_name: 'Kumoyuni 74-0 Shonan Color (Model Train)',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523005',
        visited: false,
    },
    {
        product_name: 'KATO 70148015 N Portram TLR 601 Portram, grün',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523024',
        visited: true,
    },
    {
        product_name: 'Kato 8002 Koki 10000 Freight Wagon',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf52302b',
        visited: true,
    },
    {
        product_name: 'Kato 10-847 E259 Narita Express 3 Car Powered Set',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523032',
        visited: false,
    },
    {
        product_name: "Kato 11-105 Small Type Moter Unit (for Bandai's B-train Shorty)",
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf52303d',
        visited: false,
    },
    {
        product_name: 'Kato 23-233 Wooden Station & Buildings',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523068',
        visited: false,
    },
    {
        product_name: 'Kato N Gauge Train Set Case (Kato PlaRail Model Train) [Toy]',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523073',
        visited: false,
    },
    {
        product_name: 'Kato 10-809 Freight Train 6 Car Set',
        manufacturer: 'Kato',
        id: '636d94f42c67bb80bf523082',
        visited: true,
    },
];

export default function QueryPreItemWrapper({ ...rest }: HTMLAttributes<HTMLDivElement>): JSX.Element {
    const { queryResults } = useAppSelector((state: RootState) => state.querySlice);
    return (
        <Box {...rest}>
            <>{console.log(queryResults, '11111111111')}</>
            {test &&
                test.sort((a, b) => Number(b.visited) - Number(a.visited)) &&
                test.map(el => (
                    <QueryPreItem
                        key={el.id}
                        id={el.id}
                        manufacturer={el.manufacturer}
                        visited={el.visited}
                        product_name={el.product_name}
                    />
                ))}
        </Box>
    );
}
