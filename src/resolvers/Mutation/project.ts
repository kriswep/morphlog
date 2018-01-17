import { getUserId, Context } from '../../utils'

export const project = {
  async createProject(parent, { name, text }, ctx: Context, info) {
    const userId = getUserId(ctx)
    console.log(userId)
    return ctx.db.mutation.createProject(
      {
        data: {
          name,
          admin: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

}
