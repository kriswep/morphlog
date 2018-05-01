import addResolver from './addResolver';
import { getUserId, isUserProjectAllowed, Context } from './index';

export const requiresAuth = addResolver((parent, args, context: Context) => {
  const userId = getUserId(context);

  context.user = { id: userId };

  return userId;
});

export const requiresProjectAccess = addResolver(
  async (parent, args, context: Context) => {
    const projectId = args.projectId || args.id;
    return await isUserProjectAllowed(context, projectId);
  },
);

export const requiresTeamAccess = addResolver(
  async (parent, args, context: Context) => {
    // const projectId = args.projectId || args.id;
    // return await isUserProjectAllowed(context, projectId);
    return true;
  },
);
