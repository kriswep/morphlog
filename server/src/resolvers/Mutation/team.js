import { getUserId } from '../../utils';
import { requiresAuth, requiresTeamWriteAccess } from '../../utils/permissions';

const team = {
  async createTeam(parent, { name }, ctx, info) {
    const userId = await getUserId(ctx);

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
    .addResolver(async (parent, { teamId, email }, ctx, info) =>
      ctx.db.mutation.updateTeam(
        {
          where: { id: teamId },
          data: {
            member: {
              connect: { email },
            },
          },
        },
        info,
      ),
    ),
};

export default team;
