import type { NextPage } from 'next';
import Head from 'next/head';
import { PageWrapper, Box, Searchbar, QueryComponent, QueryPreItemWrapper } from 'components';
import { useEffect } from 'react';
import { axiosHanlder } from 'axios_handler/handler';
// import { useEffect } from 'react';

const Home: NextPage = () => {
    return (
        <PageWrapper>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <QueryComponent />
            <Box className="relative top-[30%]">
                <Searchbar className="m-auto flex gap-3 p-3 items-center rounded-2xl w-full max-w-2xl border-2 text-lg group border-bgInput hover:shadow-xl hover:bg-bgInput hover:rounded-b-none" />
                <QueryPreItemWrapper className="max-w-2xl m-auto py-3 grid gap-1 bg-bgInput rounded-b-2xl" />
            </Box>
        </PageWrapper>
    );
};

export default Home;

// export async function getStaticProps() {
//     const article = await client.fetch(`*[_type == "article"]`);
//     console.log(article, 'data');
//     return {
//         props: { article },
//     };
// }
