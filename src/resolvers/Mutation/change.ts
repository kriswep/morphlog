import { getUserId, isUserProjectAllowed, Context } from '../../utils'

export const change = {
  async addChange(parent, { projectId, text }, ctx: Context, info) {
    const userId = getUserId(ctx)
    await isUserProjectAllowed(ctx, projectId);

    return ctx.db.mutation.createChange(
      {
        data: {
          text,
          project: {
            connect: { id: projectId },
          },
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

}
