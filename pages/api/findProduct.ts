// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { PRODUCT } from 'Types/product';
const prisma = new PrismaClient();

type Data = Partial<PRODUCT>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { q }: { q: string } = req.query as { q: string };
    console.log(q);
    const product = await prisma.amazonProducts.findMany({
        where: { product_name: { startsWith: q } },
        select: {
            product_name: true,
            manufacturer: true,
            id: true,
            visited: true,
        },
        take: 10,
    });

    // console.log(products, 'here');
    res.status(200).json(product);
}

// select: {
//     product_name: true,
//     product_description: true,
//     id: true,
//     visited: true,
// },

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { q }: { q: string } = req.query as { q: string };
//     console.log(q);
//     const product = await prisma.amazonProducts.findMany({
//         where: {
//             AND: [{ product_name: { startsWith: q } }, { manufacturer: { equals: 'AUTOart' } }],
//         },
//         select: {
//             product_name: true,
//             product_description: true,
//             id: true,
//             visited: true,
//         },
//         take: 10,
//     });

//     // console.log(products, 'here');
//     res.status(200).json(product);
// }
