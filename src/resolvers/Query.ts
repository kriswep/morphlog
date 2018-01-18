import { getUserId, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id: id } }, info)
  },

  project(parent, { id }, ctx: Context, info) {
    return ctx.db.query.project({ where: { id: id } }, info)
  },

  change(parent, { id }, ctx: Context, info) {
    return ctx.db.query.change({ where: { id: id } }, info)
  },

  changes(parent, { projectId }, ctx: Context, info) {
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
