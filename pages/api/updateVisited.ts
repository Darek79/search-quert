import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { PRODUCT } from 'Types/product';
const prisma = new PrismaClient();

type Data = Partial<PRODUCT>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { q }: { q: string } = req.query as { q: string };

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
    product.sort((a, b) => Number(a.visited) - Number(b.visited));
    // console.log(products, 'here');
    res.status(200).json(product);
}
