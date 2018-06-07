import * as jwt from 'jsonwebtoken';

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

export async function getUserId(ctx) {
  if (ctx.user && ctx.user.id) {
    return ctx.user.id;
  }
  const Authorization = ctx.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      // check, if user is (still) in the db
      await ctx.db.exists.User({
        id: userId,
      });
      // set userId in context and return
      ctx.user = { id: userId };
      return userId;
    } catch (e) {
      throw new AuthError();
    }
  }

  throw new AuthError();
}

export async function isUserProjectAllowed(ctx, projectId) {
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

export async function hasTeamRead(ctx, teamId) {
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

export async function hasTeamWrite(ctx, teamId) {
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
