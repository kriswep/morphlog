import { getUserId, isUserProjectAllowed, Context } from './utils';

const directiveResolvers = {
  isAuthenticated: (next, source, args, context: Context) => {
    getUserId(context);
    return next();
  },
  isAllowed: (next, source, args, context: Context) => {
    /**
     * sadly only works with querys with variables:
    query project($id: ID!) {
      project(id: $id) {
        id
        name
      }
    }
     * not
    {
      project(id: "cjcp94wxp025801100npb28yg") {
        id
        name
      }
    }
     */
    const { id: projectId } = context.request.body.variables;
    isUserProjectAllowed(context, projectId);
    return next();
  },
};

export default directiveResolvers;
