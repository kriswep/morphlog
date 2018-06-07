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
