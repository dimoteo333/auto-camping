import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/db';
import { getAuth } from '@clerk/nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    const subs = await prisma.subscription.findMany({ where: { userId } });
    return res.status(200).json(subs);
  }

  if (req.method === 'POST') {
    const { facilityCode, targetDate, personCount, options } = req.body;
    const newSub = await prisma.subscription.create({
      data: { userId, facilityCode, targetDate: new Date(targetDate), personCount, options },
    });
    return res.status(201).json(newSub);
  }

  return res.status(405).end();
}