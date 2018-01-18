import { getUserId, Context } from '../../utils'

export const change = {
  async addChange(parent, { projectId, text }, ctx: Context, info) {
    const userId = getUserId(ctx)
    const projectMember = await ctx.db.exists.Project({
      id: projectId,
      member_some: { id: userId },
    })
    const projectAdmin = await ctx.db.exists.Project({
      id: projectId,
      admin_some: { id: userId },
    })
    if (!projectMember && ! projectAdmin) {
      throw new Error(`Project not found or not allowed`)
    }

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
