import { getUserId, isUserProjectAllowed } from '../../utils';

const change = {
  async addChange(parent, { projectId, text }, ctx, info) {
    const userId = await getUserId(ctx);
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
      info,
    );
  },

  async updateChange(parent, { changeId, projectId, text }, ctx, info) {
    const userId = await getUserId(ctx);

    const isAuthor = ctx.db.exists.Change({
      id: changeId,
      author: { id: userId },
    });

    const isAdmin = ctx.db.exists.Project({
      id: projectId,
      admin_some: { id: userId },
    });
    if (!(await isAuthor) && !(await isAdmin)) {
      throw new Error(`Not your Change`);
    }

    await isUserProjectAllowed(ctx, projectId);

    return ctx.db.mutation.updateChange(
      {
        where: { id: changeId },
        data: {
          text,
        },
      },
      info,
    );
  },
};

export default change;
