import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { guestRequestValidationSchema } from 'validationSchema/guest-requests';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.guest_request
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getGuestRequestById();
    case 'PUT':
      return updateGuestRequestById();
    case 'DELETE':
      return deleteGuestRequestById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getGuestRequestById() {
    const data = await prisma.guest_request.findFirst(convertQueryToPrismaUtil(req.query, 'guest_request'));
    return res.status(200).json(data);
  }

  async function updateGuestRequestById() {
    await guestRequestValidationSchema.validate(req.body);
    const data = await prisma.guest_request.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteGuestRequestById() {
    const data = await prisma.guest_request.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
