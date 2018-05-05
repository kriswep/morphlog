import { getUserId, Context } from '../../utils';
import { requiresAuth, requiresTeamWriteAccess } from '../../utils/permissions';

export const team = {
  async createTeam(parent, { name }, ctx: Context, info) {
    const userId = getUserId(ctx);

    return ctx.db.mutation.createTeam(
      {
        data: {
          name,
          owner: {
            connect: { id: userId },
          },
        },
      },
      info,
    );
  },

  addTeamMember: requiresAuth
    .addResolver(requiresTeamWriteAccess)
    .addResolver(async (parent, { teamId, email }, ctx: Context, info) => {
      return ctx.db.mutation.updateTeam(
        {
          where: { id: teamId },
          data: {
            member: {
              connect: { email },
            },
          },
        },
        info,
      );
    }),
};