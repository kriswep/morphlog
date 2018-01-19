import { getUserId, isUserProjectAllowed, Context } from '../utils'

export const Query = {
  async project(parent, { id }, ctx: Context, info) {
    await isUserProjectAllowed(ctx, id)
    return ctx.db.query.project({ where: { id: id } }, info)
  },

  change(parent, { id }, ctx: Context, info) {
    return ctx.db.query.change({ where: { id: id } }, info)
  },

  async changes(parent, { projectId }, ctx: Context, info) {
    await isUserProjectAllowed(ctx, projectId)
    const where = {
      project: {
        id: projectId,
      }
    }

    return ctx.db.query.changes({ where }, info)
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}
