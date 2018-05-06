import addResolver from './addResolver';
import {
  getUserId,
  isUserProjectAllowed,
  hasTeamRead,
  hasTeamWrite,
  Context,
} from './index';

export const requiresAuth = addResolver(
  async (parent, args, context: Context) => {
    const userId = await getUserId(context);

    return userId;
  },
);

export const requiresProjectAccess = addResolver(
  async (parent, args, context: Context) => {
    const projectId = args.projectId || args.id;
    return await isUserProjectAllowed(context, projectId);
  },
);

export const requiresTeamReadAccess = addResolver(
  async (parent, args, context: Context) => {
    const teamId = args.teamId || args.id;
    return await hasTeamRead(context, teamId);
  },
);

export const requiresTeamWriteAccess = addResolver(
  async (parent, args, context: Context) => {
    const teamId = args.teamId || args.id;
    return await hasTeamWrite(context, teamId);
  },
);
