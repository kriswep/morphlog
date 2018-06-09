import addResolver from './addResolver';
import {
  getUserId,
  isUserProjectAllowed,
  hasTeamRead,
  hasTeamWrite,
} from './index';

export const requiresAuth = addResolver(async (parent, args, context) => {
  const userId = await getUserId(context);

  return userId;
});

export const requiresProjectAccess = addResolver(
  async (parent, args, context) => {
    const projectId = args.projectId || args.id;
    return isUserProjectAllowed(context, projectId);
  },
);

export const requiresTeamReadAccess = addResolver(
  async (parent, args, context) => {
    const teamId = args.teamId || args.id;
    return hasTeamRead(context, teamId);
  },
);

export const requiresTeamWriteAccess = addResolver(
  async (parent, args, context) => {
    const teamId = args.teamId || args.id;
    return hasTeamWrite(context, teamId);
  },
);
