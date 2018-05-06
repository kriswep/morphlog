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

export async function getUserId(ctx: Context): Promise<ID_Input> {
  if (ctx.user && ctx.user.id) {
    console.log(`user ${ctx.user.id} was known in request`);
    return ctx.user.id;
  }
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
        userId: string;
      };
      ctx.user = { id: userId };
      return userId;
    } catch (e) {
      throw new AuthError();
    }
  }

  throw new AuthError();
}

export async function isUserProjectAllowed(ctx: Context, projectId) {
  const userId = await getUserId(ctx);
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

export async function hasTeamRead(ctx: Context, teamId) {
  const userId = await getUserId(ctx);
  if (!userId || !teamId) {
    throw new AccessError();
  }
  const hasAcess = ctx.db.exists.Team({
    id: teamId,
    OR: [
      { owner: { id: userId } },
      { admin_some: { id: userId } },
      { member_some: { id: userId } },
    ],
  });
  if (await hasAcess) {
    return true;
  }

  throw new AccessError();
}

export async function hasTeamWrite(ctx: Context, teamId) {
  const userId = await getUserId(ctx);
  if (!userId || !teamId) {
    throw new AccessError();
  }
  const hasAcess = ctx.db.exists.Team({
    id: teamId,
    OR: [{ owner: { id: userId } }, { admin_some: { id: userId } }],
  });
  if (await hasAcess) {
    return true;
  }

  throw new AccessError();
}
