import * as jwt from 'jsonwebtoken'
import { Prisma } from 'prisma-binding'

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

export async function isUserProjectAllowed(ctx: Context, projectId) {
  const userId = getUserId(ctx);
  const projectMember = ctx.db.exists.Project({
    id: projectId,
    member_some: { id: userId },
  })
  const projectAdmin = ctx.db.exists.Project({
    id: projectId,
    admin_some: { id: userId },
  })
  if (await projectMember || await projectAdmin) {
    console.log(projectMember, projectAdmin)
    return true;
  }

  throw new AccessError()
}

export class AccessError extends Error {
  constructor() {
    super('No Access')
  }
}
