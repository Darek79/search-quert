// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Data = number;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { q }: { q: string } = req.query as { q: string };
    const product = await prisma.amazonProducts.count({
        where: { product_name: { contains: q } },
    });
    res.status(200).json(product);
}
