import { Query } from './Query'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { project } from './Mutation/project'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...project,
  },
  AuthPayload,
}
