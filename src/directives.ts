import { getUserId, isUserProjectAllowed, Context } from './utils';
// see https://github.com/LawJolla/prisma-auth0-example
// https://blog.graph.cool/graphql-directive-permissions-authorization-made-easy-54c076b5368e
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
