import { Query } from './Query';
import { auth } from './Mutation/auth';
import { project } from './Mutation/project';
import { change } from './Mutation/change';
import { team } from './Mutation/team';
import { AuthPayload } from './AuthPayload';

export default {
  Query,
  Mutation: {
    ...auth,
    ...project,
    ...change,
    ...team,
  },
  AuthPayload,
};
