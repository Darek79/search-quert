// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
        skip: 10,
    });
    product.sort((a, b) => Number(a.visited) - Number(b.visited));
    res.status(200).json(product);
}
