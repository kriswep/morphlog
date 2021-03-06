import { getUserId } from '../../utils';

const project = {
  async createProject(parent, { name }, ctx, info) {
    const userId = await getUserId(ctx);

    return ctx.db.mutation.createProject(
      {
        data: {
          name,
          admin: {
            connect: { id: userId },
          },
          team: {
            create: {
              owner: { connect: { id: userId } },
            },
          },
        },
      },
      info,
    );
  },

  async addProjectMember(parent, { user, project: projectId }, ctx, info) {
    const userId = await getUserId(ctx);
    const isProjectAdmin = await ctx.db.exists.Project({
      id: projectId,
      admin_some: { id: userId },
    });
    if (!isProjectAdmin) {
      throw new Error(`Project not found or you're not an admin`);
    }
    const userExists = await ctx.db.exists.User({
      id: user,
    });
    if (!userExists) {
      throw new Error(`User does not exist`);
    }

    return ctx.db.mutation.updateProject(
      {
        where: { id: projectId },
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

export default project;
