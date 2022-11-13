import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Data = boolean;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const data = req.query;

    const product = await prisma.amazonProducts.update({
        where: {
            id: data.id as string,
        },
        data: {
            visited: Boolean(data.visited),
        },
    });

    res.status(200).json(product.visited);
}
