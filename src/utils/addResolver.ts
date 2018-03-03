const addResolver = resolver => {
  const baseResolver = resolver;
  baseResolver.addResolver = childResolver => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return addResolver(newResolver);
  };
  return baseResolver;
};

export default addResolver;

// export interface Resolver {
//   (parent: Object, args: Object, context: Object, info: Object): Promise<
//     Resolver
//   >;
//   addResolver?: Function;
// }

// const addResolver = (resolver: Resolver): Resolver => {
//   const baseResolver = resolver;
//   baseResolver.addResolver = childResolver => {
//     const newResolver = async (
//       parent: Object,
//       args: Object,
//       context: Object,
//       info: Object,
//     ) => {
//       await resolver(parent, args, context, info);
//       return childResolver(parent, args, context, info);
//     };
//     return addResolver(newResolver);
//   };
//   return baseResolver;
// };

// export default addResolver;
