import { getUserId, isUserProjectAllowed, Context } from '../utils';
import { requiresAuth } from '../utils/permissions';

export const Query = {
  project: requiresAuth.addResolver(
    async (parent, { id }, ctx: Context, info) => {
      await isUserProjectAllowed(ctx, id);
      return ctx.db.query.project({ where: { id } }, info);
    },
  ),

  change: requiresAuth.addResolver((parent, { id }, ctx: Context, info) => {
    return ctx.db.query.change({ where: { id } }, info);
  }),

  projects: requiresAuth.addResolver((parent, filter, ctx: Context, info) => {
    const id = getUserId(ctx);

    return ctx.db.query.projects(
      {
        ...filter,
        where: {
          OR: [
            {
              member_some: { id },
            },
            {
              admin_some: { id },
            },
          ],
        },
      },
      info,
    );
  }),

  changes: requiresAuth.addResolver(
    async (parent, { projectId, ...filter }, ctx: Context, info) => {
      await isUserProjectAllowed(ctx, projectId);
      const where = {
        project: {
          id: projectId,
        },
      };

      return ctx.db.query.changes(
        { ...filter, orderBy: 'createdAt_DESC', where },
        info,
      );
    },
  ),

  me: requiresAuth.addResolver((parent, args, ctx: Context, info) => {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id } }, info);
  }),
};
