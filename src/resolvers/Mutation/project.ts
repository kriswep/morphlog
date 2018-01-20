import { getUserId, Context } from '../../utils';

export const project = {
  async createProject(parent, { name, text }, ctx: Context, info) {
    const userId = getUserId(ctx);

    return ctx.db.mutation.createProject(
      {
        data: {
          name,
          admin: {
            connect: { id: userId },
          },
        },
      },
      info,
    );
  },

  async addProjectMember(parent, { user, project }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const isProjectAdmin = await ctx.db.exists.Project({
      id: project,
      admin_some: { id: userId },
    });
    const userExists = await ctx.db.exists.User({
      id: user,
    });
    if (!isProjectAdmin) {
      throw new Error(`Project not found or you're not an admin`);
    }
    if (!userExists) {
      throw new Error(`User does not exist`);
    }

    return ctx.db.mutation.updateProject(
      {
        where: { id: project },
        data: {
          member: {
            connect: { id: user },
          },
        },
      },
      info,
    );
  },
};
