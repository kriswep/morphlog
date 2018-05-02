import { getUserId, Context } from '../../utils';

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
};
