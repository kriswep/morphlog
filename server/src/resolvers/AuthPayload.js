const AuthPayload = {
  user: async ({ user: { id } }, args, ctx, info) =>
    ctx.db.query.user({ where: { id } }, info),
};

export default AuthPayload;
