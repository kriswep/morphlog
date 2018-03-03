import addResolver from './addResolver';

/* eslint-disable import/prefer-default-export */
export const requiresAuth = addResolver((parent, args, { user }) => {
  if (!user || !user.sub) {
    throw new Error('Not authenticated');
  }
});
