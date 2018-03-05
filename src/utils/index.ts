import * as jwt from 'jsonwebtoken';
import { Prisma, ID_Input } from '../generated/prisma';

export interface Context {
  db: Prisma;
  request: any;
  user: { id: ID_Input };
}

export class AuthError extends Error {
  constructor() {
    super('Not Authenticated');
  }
}

export class AccessError extends Error {
  constructor() {
    super('No Access');
  }
}

export function getUserId(ctx: Context): ID_Input {
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
        userId: string;
      };
      return userId;
    } catch (e) {
      throw new AuthError();
    }
  }

  throw new AuthError();
}

export async function isUserProjectAllowed(ctx: Context, projectId) {
  const userId = getUserId(ctx);
  if (!userId || !projectId) {
    throw new AccessError();
  }
  const projectMember = ctx.db.exists.Project({
    id: projectId,
    member_some: { id: userId },
  });
  const projectAdmin = ctx.db.exists.Project({
    id: projectId,
    admin_some: { id: userId },
  });
  if ((await projectMember) || (await projectAdmin)) {
    return true;
  }

  throw new AccessError();
}
