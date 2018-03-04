import addResolver from './addResolver';
import { getUserId } from './index';

/* eslint-disable import/prefer-default-export */
export const requiresAuth = addResolver((parent, args, context) => {
  return getUserId(context);
});
