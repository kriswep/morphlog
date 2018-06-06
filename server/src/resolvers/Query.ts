import { isUserProjectAllowed, Context } from '../utils';
import {
  requiresAuth,
  requiresProjectAccess,
  requiresTeamReadAccess,
} from '../utils/permissions';

export const Query = {
  me: requiresAuth.addResolver((parent, args, ctx: Context, info) => {
    const id = ctx.user.id;
    return ctx.db.query.user({ where: { id } }, info);
  }),

  project: requiresAuth
    .addResolver(requiresProjectAccess)
    .addResolver(async (parent, { id }, ctx: Context, info) =>
      ctx.db.query.project({ where: { id } }, info),
    ),

  projects: requiresAuth.addResolver((parent, args, ctx: Context, info) => {
    const id = ctx.user.id;

    return ctx.db.query.projects(
      {
        ...args,
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

  change: requiresAuth.addResolver(
    async (parent, { id }, ctx: Context, info) => {
      const userId = ctx.user.id;

      const isAuthor = ctx.db.exists.Change({
        id,
        author: { id: userId },
      });

      const isAdmin = ctx.db.exists.Project({
        AND: [
          {
            change_some: { id },
            admin_some: { id: userId },
          },
        ],
      });
      if (!(await isAuthor) && !(await isAdmin)) {
        throw new Error(`Not your Change`);
      }

      return ctx.db.query.change({ where: { id } }, info);
    },
  ),

  changes: requiresAuth
    .addResolver(requiresProjectAccess)
    .addResolver(
      async (parent, { projectId, ...filter }, ctx: Context, info) => {
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

  team: requiresAuth
    .addResolver(requiresTeamReadAccess)
    .addResolver(async (parent, { id }, ctx: Context, info) =>
      ctx.db.query.team({ where: { id } }, info),
    ),

  teams: requiresAuth.addResolver((parent, args, ctx: Context, info) => {
    const id = ctx.user.id;

    return ctx.db.query.teams(
      {
        ...args,
        where: {
          OR: [
            {
              owner: { id },
            },
            {
              admin_some: { id },
            },
            {
              member_some: { id },
            },
          ],
        },
      },
      info,
    );
  }),
};
