import { getUserId, isUserProjectAllowed, Context } from './utils';
// see https://github.com/LawJolla/prisma-auth0-example
// https://blog.graph.cool/graphql-directive-permissions-authorization-made-easy-54c076b5368e
const directiveResolvers = {
  isAuthenticated: (next, source, args, context: Context) => {
    getUserId(context);
    return next();
  },
  isAllowed: async (
    next,
    source,
    { fieldNode, argumentName },
    context: Context,
    info,
  ) => {
    // // doesn't really work with variable querys, but with normal ones
    // const projectId = info.fieldNodes
    //   .filter(node => node.name.value === fieldNode)
    //   .reduce(
    //     (acc, node) =>
    //       (acc = [
    //         ...acc,
    //         ...node.arguments.filter(arg => arg.name.value === argumentName),
    //       ]),
    //     [],
    //   )
    //   .reduce((acc, args) => (acc = args.value.value), '');
    // debugger;
    // // doesn't really work with normal querys, but with variable ones
    // // const { id: projectId } = context.request.body.variables;
    // await isUserProjectAllowed(context, projectId);
    return next();
  },
};

export default directiveResolvers;
