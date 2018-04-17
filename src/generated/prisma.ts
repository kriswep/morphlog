import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Change implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  author(where: UserWhereInput): User!
  project(where: ProjectWhereInput): Project!
}

type Project implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  member(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  admin(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  change(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Change!]
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  projectMember(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  projectAdmin(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type AggregateChange {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type ChangeConnection {
  pageInfo: PageInfo!
  edges: [ChangeEdge]!
  aggregate: AggregateChange!
}

input ChangeCreateInput {
  text: String!
  author: UserCreateOneInput!
  project: ProjectCreateOneWithoutChangeInput!
}

input ChangeCreateManyWithoutProjectInput {
  create: [ChangeCreateWithoutProjectInput!]
  connect: [ChangeWhereUniqueInput!]
}

input ChangeCreateWithoutProjectInput {
  text: String!
  author: UserCreateOneInput!
}

type ChangeEdge {
  node: Change!
  cursor: String!
}

enum ChangeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
}

type ChangePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
}

type ChangeSubscriptionPayload {
  mutation: MutationType!
  node: Change
  updatedFields: [String!]
  previousValues: ChangePreviousValues
}

input ChangeSubscriptionWhereInput {
  AND: [ChangeSubscriptionWhereInput!]
  OR: [ChangeSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChangeWhereInput
}

input ChangeUpdateInput {
  text: String
  author: UserUpdateOneInput
  project: ProjectUpdateOneWithoutChangeInput
}

input ChangeUpdateManyWithoutProjectInput {
  create: [ChangeCreateWithoutProjectInput!]
  connect: [ChangeWhereUniqueInput!]
  disconnect: [ChangeWhereUniqueInput!]
  delete: [ChangeWhereUniqueInput!]
  update: [ChangeUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [ChangeUpsertWithWhereUniqueWithoutProjectInput!]
}

input ChangeUpdateWithoutProjectDataInput {
  text: String
  author: UserUpdateOneInput
}

input ChangeUpdateWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput!
  data: ChangeUpdateWithoutProjectDataInput!
}

input ChangeUpsertWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput!
  update: ChangeUpdateWithoutProjectDataInput!
  create: ChangeCreateWithoutProjectInput!
}

input ChangeWhereInput {
  AND: [ChangeWhereInput!]
  OR: [ChangeWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  project: ProjectWhereInput
}

input ChangeWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  member: UserCreateManyWithoutProjectMemberInput
  admin: UserCreateManyWithoutProjectAdminInput
  change: ChangeCreateManyWithoutProjectInput
}

input ProjectCreateManyWithoutAdminInput {
  create: [ProjectCreateWithoutAdminInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateManyWithoutMemberInput {
  create: [ProjectCreateWithoutMemberInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutChangeInput {
  create: ProjectCreateWithoutChangeInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutAdminInput {
  name: String!
  member: UserCreateManyWithoutProjectMemberInput
  change: ChangeCreateManyWithoutProjectInput
}

input ProjectCreateWithoutChangeInput {
  name: String!
  member: UserCreateManyWithoutProjectMemberInput
  admin: UserCreateManyWithoutProjectAdminInput
}

input ProjectCreateWithoutMemberInput {
  name: String!
  admin: UserCreateManyWithoutProjectAdminInput
  change: ChangeCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type ProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
}

input ProjectUpdateInput {
  name: String
  member: UserUpdateManyWithoutProjectMemberInput
  admin: UserUpdateManyWithoutProjectAdminInput
  change: ChangeUpdateManyWithoutProjectInput
}

input ProjectUpdateManyWithoutAdminInput {
  create: [ProjectCreateWithoutAdminInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  delete: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutAdminInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutAdminInput!]
}

input ProjectUpdateManyWithoutMemberInput {
  create: [ProjectCreateWithoutMemberInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  delete: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutMemberInput!]
}

input ProjectUpdateOneWithoutChangeInput {
  create: ProjectCreateWithoutChangeInput
  connect: ProjectWhereUniqueInput
  delete: Boolean
  update: ProjectUpdateWithoutChangeDataInput
  upsert: ProjectUpsertWithoutChangeInput
}

input ProjectUpdateWithoutAdminDataInput {
  name: String
  member: UserUpdateManyWithoutProjectMemberInput
  change: ChangeUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutChangeDataInput {
  name: String
  member: UserUpdateManyWithoutProjectMemberInput
  admin: UserUpdateManyWithoutProjectAdminInput
}

input ProjectUpdateWithoutMemberDataInput {
  name: String
  admin: UserUpdateManyWithoutProjectAdminInput
  change: ChangeUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutAdminDataInput!
}

input ProjectUpdateWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutMemberDataInput!
}

input ProjectUpsertWithoutChangeInput {
  update: ProjectUpdateWithoutChangeDataInput!
  create: ProjectCreateWithoutChangeInput!
}

input ProjectUpsertWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutAdminDataInput!
  create: ProjectCreateWithoutAdminInput!
}

input ProjectUpsertWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutMemberDataInput!
  create: ProjectCreateWithoutMemberInput!
}

input ProjectWhereInput {
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  member_every: UserWhereInput
  member_some: UserWhereInput
  member_none: UserWhereInput
  admin_every: UserWhereInput
  admin_some: UserWhereInput
  admin_none: UserWhereInput
  change_every: ChangeWhereInput
  change_some: ChangeWhereInput
  change_none: ChangeWhereInput
}

input ProjectWhereUniqueInput {
  id: ID
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  projectMember: ProjectCreateManyWithoutMemberInput
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

input UserCreateManyWithoutProjectAdminInput {
  create: [UserCreateWithoutProjectAdminInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutProjectMemberInput {
  create: [UserCreateWithoutProjectMemberInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectAdminInput {
  email: String!
  password: String!
  name: String!
  projectMember: ProjectCreateManyWithoutMemberInput
}

input UserCreateWithoutProjectMemberInput {
  email: String!
  password: String!
  name: String!
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  projectMember: ProjectUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  projectMember: ProjectUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateManyWithoutProjectAdminInput {
  create: [UserCreateWithoutProjectAdminInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutProjectAdminInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutProjectAdminInput!]
}

input UserUpdateManyWithoutProjectMemberInput {
  create: [UserCreateWithoutProjectMemberInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutProjectMemberInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutProjectMemberInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateWithoutProjectAdminDataInput {
  email: String
  password: String
  name: String
  projectMember: ProjectUpdateManyWithoutMemberInput
}

input UserUpdateWithoutProjectMemberDataInput {
  email: String
  password: String
  name: String
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutProjectAdminDataInput!
}

input UserUpdateWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutProjectMemberDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutProjectAdminDataInput!
  create: UserCreateWithoutProjectAdminInput!
}

input UserUpsertWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutProjectMemberDataInput!
  create: UserCreateWithoutProjectMemberInput!
}

input UserWhereInput {
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  projectMember_every: ProjectWhereInput
  projectMember_some: ProjectWhereInput
  projectMember_none: ProjectWhereInput
  projectAdmin_every: ProjectWhereInput
  projectAdmin_some: ProjectWhereInput
  projectAdmin_none: ProjectWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  createChange(data: ChangeCreateInput!): Change!
  createUser(data: UserCreateInput!): User!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateChange(data: ChangeUpdateInput!, where: ChangeWhereUniqueInput!): Change
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteChange(where: ChangeWhereUniqueInput!): Change
  deleteUser(where: UserWhereUniqueInput!): User
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertChange(where: ChangeWhereUniqueInput!, create: ChangeCreateInput!, update: ChangeUpdateInput!): Change!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  updateManyChanges(data: ChangeUpdateInput!, where: ChangeWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyChanges(where: ChangeWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

type Query {
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  changes(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Change]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  project(where: ProjectWhereUniqueInput!): Project
  change(where: ChangeWhereUniqueInput!): Change
  user(where: UserWhereUniqueInput!): User
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  changesConnection(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChangeConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  change(where: ChangeSubscriptionWhereInput): ChangeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}
`

export type ProjectOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ChangeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ProjectCreateOneWithoutChangeInput {
  create?: ProjectCreateWithoutChangeInput
  connect?: ProjectWhereUniqueInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | ProjectWhereInput
  OR?: ProjectWhereInput[] | ProjectWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  member_every?: UserWhereInput
  member_some?: UserWhereInput
  member_none?: UserWhereInput
  admin_every?: UserWhereInput
  admin_some?: UserWhereInput
  admin_none?: UserWhereInput
  change_every?: ChangeWhereInput
  change_some?: ChangeWhereInput
  change_none?: ChangeWhereInput
}

export interface UserUpdateManyWithoutProjectMemberInput {
  create?: UserCreateWithoutProjectMemberInput[] | UserCreateWithoutProjectMemberInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutProjectMemberInput[] | UserUpdateWithWhereUniqueWithoutProjectMemberInput
  upsert?: UserUpsertWithWhereUniqueWithoutProjectMemberInput[] | UserUpsertWithWhereUniqueWithoutProjectMemberInput
}

export interface ChangeWhereInput {
  AND?: ChangeWhereInput[] | ChangeWhereInput
  OR?: ChangeWhereInput[] | ChangeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  project?: ProjectWhereInput
}

export interface ChangeCreateWithoutProjectInput {
  text: String
  author: UserCreateOneInput
}

export interface UserUpdateManyWithoutProjectAdminInput {
  create?: UserCreateWithoutProjectAdminInput[] | UserCreateWithoutProjectAdminInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutProjectAdminInput[] | UserUpdateWithWhereUniqueWithoutProjectAdminInput
  upsert?: UserUpsertWithWhereUniqueWithoutProjectAdminInput[] | UserUpsertWithWhereUniqueWithoutProjectAdminInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutProjectMemberDataInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  projectMember?: ProjectCreateManyWithoutMemberInput
  projectAdmin?: ProjectCreateManyWithoutAdminInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface ProjectCreateManyWithoutMemberInput {
  create?: ProjectCreateWithoutMemberInput[] | ProjectCreateWithoutMemberInput
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
}

export interface ProjectSubscriptionWhereInput {
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProjectWhereInput
}

export interface ProjectCreateWithoutMemberInput {
  name: String
  admin?: UserCreateManyWithoutProjectAdminInput
  change?: ChangeCreateManyWithoutProjectInput
}

export interface ChangeWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateManyWithoutProjectAdminInput {
  create?: UserCreateWithoutProjectAdminInput[] | UserCreateWithoutProjectAdminInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  projectMember?: ProjectUpdateManyWithoutMemberInput
  projectAdmin?: ProjectUpdateManyWithoutAdminInput
}

export interface UserCreateWithoutProjectAdminInput {
  email: String
  password: String
  name: String
  projectMember?: ProjectCreateManyWithoutMemberInput
}

export interface ProjectUpdateWithoutChangeDataInput {
  name?: String
  member?: UserUpdateManyWithoutProjectMemberInput
  admin?: UserUpdateManyWithoutProjectAdminInput
}

export interface ChangeCreateInput {
  text: String
  author: UserCreateOneInput
  project: ProjectCreateOneWithoutChangeInput
}

export interface ChangeUpdateInput {
  text?: String
  author?: UserUpdateOneInput
  project?: ProjectUpdateOneWithoutChangeInput
}

export interface UserUpdateWithoutProjectAdminDataInput {
  email?: String
  password?: String
  name?: String
  projectMember?: ProjectUpdateManyWithoutMemberInput
}

export interface ProjectUpsertWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutAdminDataInput
  create: ProjectCreateWithoutAdminInput
}

export interface ProjectCreateWithoutChangeInput {
  name: String
  member?: UserCreateManyWithoutProjectMemberInput
  admin?: UserCreateManyWithoutProjectAdminInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface ProjectUpdateInput {
  name?: String
  member?: UserUpdateManyWithoutProjectMemberInput
  admin?: UserUpdateManyWithoutProjectAdminInput
  change?: ChangeUpdateManyWithoutProjectInput
}

export interface UserUpsertWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutProjectAdminDataInput
  create: UserCreateWithoutProjectAdminInput
}

export interface UserUpdateWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutProjectAdminDataInput
}

export interface UserCreateManyWithoutProjectMemberInput {
  create?: UserCreateWithoutProjectMemberInput[] | UserCreateWithoutProjectMemberInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ProjectCreateManyWithoutAdminInput {
  create?: ProjectCreateWithoutAdminInput[] | ProjectCreateWithoutAdminInput
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
}

export interface ChangeCreateManyWithoutProjectInput {
  create?: ChangeCreateWithoutProjectInput[] | ChangeCreateWithoutProjectInput
  connect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput
}

export interface UserUpdateWithoutProjectMemberDataInput {
  email?: String
  password?: String
  name?: String
  projectAdmin?: ProjectUpdateManyWithoutAdminInput
}

export interface ChangeSubscriptionWhereInput {
  AND?: ChangeSubscriptionWhereInput[] | ChangeSubscriptionWhereInput
  OR?: ChangeSubscriptionWhereInput[] | ChangeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChangeWhereInput
}

export interface ProjectUpdateManyWithoutAdminInput {
  create?: ProjectCreateWithoutAdminInput[] | ProjectCreateWithoutAdminInput
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  update?: ProjectUpdateWithWhereUniqueWithoutAdminInput[] | ProjectUpdateWithWhereUniqueWithoutAdminInput
  upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput[] | ProjectUpsertWithWhereUniqueWithoutAdminInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ProjectUpdateWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutAdminDataInput
}

export interface ProjectUpdateOneWithoutChangeInput {
  create?: ProjectCreateWithoutChangeInput
  connect?: ProjectWhereUniqueInput
  delete?: Boolean
  update?: ProjectUpdateWithoutChangeDataInput
  upsert?: ProjectUpsertWithoutChangeInput
}

export interface ProjectUpdateWithoutAdminDataInput {
  name?: String
  member?: UserUpdateManyWithoutProjectMemberInput
  change?: ChangeUpdateManyWithoutProjectInput
}

export interface ChangeUpsertWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput
  update: ChangeUpdateWithoutProjectDataInput
  create: ChangeCreateWithoutProjectInput
}

export interface ChangeUpdateManyWithoutProjectInput {
  create?: ChangeCreateWithoutProjectInput[] | ChangeCreateWithoutProjectInput
  connect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput
  disconnect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput
  delete?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput
  update?: ChangeUpdateWithWhereUniqueWithoutProjectInput[] | ChangeUpdateWithWhereUniqueWithoutProjectInput
  upsert?: ChangeUpsertWithWhereUniqueWithoutProjectInput[] | ChangeUpsertWithWhereUniqueWithoutProjectInput
}

export interface ProjectCreateInput {
  name: String
  member?: UserCreateManyWithoutProjectMemberInput
  admin?: UserCreateManyWithoutProjectAdminInput
  change?: ChangeCreateManyWithoutProjectInput
}

export interface ChangeUpdateWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput
  data: ChangeUpdateWithoutProjectDataInput
}

export interface ProjectCreateWithoutAdminInput {
  name: String
  member?: UserCreateManyWithoutProjectMemberInput
  change?: ChangeCreateManyWithoutProjectInput
}

export interface ChangeUpdateWithoutProjectDataInput {
  text?: String
  author?: UserUpdateOneInput
}

export interface ProjectWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpsertWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutProjectMemberDataInput
  create: UserCreateWithoutProjectMemberInput
}

export interface ProjectUpdateWithoutMemberDataInput {
  name?: String
  admin?: UserUpdateManyWithoutProjectAdminInput
  change?: ChangeUpdateManyWithoutProjectInput
}

export interface ProjectUpdateWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutMemberDataInput
}

export interface ProjectUpdateManyWithoutMemberInput {
  create?: ProjectCreateWithoutMemberInput[] | ProjectCreateWithoutMemberInput
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput
  update?: ProjectUpdateWithWhereUniqueWithoutMemberInput[] | ProjectUpdateWithWhereUniqueWithoutMemberInput
  upsert?: ProjectUpsertWithWhereUniqueWithoutMemberInput[] | ProjectUpsertWithWhereUniqueWithoutMemberInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  projectMember?: ProjectUpdateManyWithoutMemberInput
  projectAdmin?: ProjectUpdateManyWithoutAdminInput
}

export interface ProjectUpsertWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutMemberDataInput
  create: ProjectCreateWithoutMemberInput
}

export interface ProjectUpsertWithoutChangeInput {
  update: ProjectUpdateWithoutChangeDataInput
  create: ProjectCreateWithoutChangeInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  projectMember_every?: ProjectWhereInput
  projectMember_some?: ProjectWhereInput
  projectMember_none?: ProjectWhereInput
  projectAdmin_every?: ProjectWhereInput
  projectAdmin_some?: ProjectWhereInput
  projectAdmin_none?: ProjectWhereInput
}

export interface UserCreateWithoutProjectMemberInput {
  email: String
  password: String
  name: String
  projectAdmin?: ProjectCreateManyWithoutAdminInput
}

export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface ProjectConnection {
  pageInfo: PageInfo
  edges: ProjectEdge[]
  aggregate: AggregateProject
}

export interface Project extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  member?: User[]
  admin?: User[]
  change?: Change[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateUser {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  projectMember?: Project[]
  projectAdmin?: Project[]
}

export interface ChangeSubscriptionPayload {
  mutation: MutationType
  node?: Change
  updatedFields?: String[]
  previousValues?: ChangePreviousValues
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateChange {
  count: Int
}

export interface ChangeConnection {
  pageInfo: PageInfo
  edges: ChangeEdge[]
  aggregate: AggregateChange
}

export interface ProjectEdge {
  node: Project
  cursor: String
}

export interface ProjectPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface ProjectSubscriptionPayload {
  mutation: MutationType
  node?: Project
  updatedFields?: String[]
  previousValues?: ProjectPreviousValues
}

export interface ChangePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
}

export interface Change extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  author: User
  project: Project
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateProject {
  count: Int
}

export interface ChangeEdge {
  node: Change
  cursor: String
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  projects: (args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Project[]>
  changes: (args: { where?: ChangeWhereInput, orderBy?: ChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Change[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  project: (args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Project | null>
  change: (args: { where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Change | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  projectsConnection: (args: { where?: ProjectWhereInput, orderBy?: ProjectOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProjectConnection>
  changesConnection: (args: { where?: ChangeWhereInput, orderBy?: ChangeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ChangeConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createProject: (args: { data: ProjectCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Project>
  createChange: (args: { data: ChangeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Change>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateProject: (args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Project | null>
  updateChange: (args: { data: ChangeUpdateInput, where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Change | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteProject: (args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Project | null>
  deleteChange: (args: { where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Change | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  upsertProject: (args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Project>
  upsertChange: (args: { where: ChangeWhereUniqueInput, create: ChangeCreateInput, update: ChangeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Change>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateManyProjects: (args: { data: ProjectUpdateInput, where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyChanges: (args: { data: ChangeUpdateInput, where?: ChangeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProjects: (args: { where?: ProjectWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyChanges: (args: { where?: ChangeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  project: (args: { where?: ProjectSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProjectSubscriptionPayload>>
  change: (args: { where?: ChangeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ChangeSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Project: (where: ProjectWhereInput): Promise<boolean> => super.existsDelegate('query', 'projects', { where }, {}, '{ id }'),
    Change: (where: ChangeWhereInput): Promise<boolean> => super.existsDelegate('query', 'changes', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    projects: (args, info): Promise<Project[]> => super.delegate('query', 'projects', args, {}, info),
    changes: (args, info): Promise<Change[]> => super.delegate('query', 'changes', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    project: (args, info): Promise<Project | null> => super.delegate('query', 'project', args, {}, info),
    change: (args, info): Promise<Change | null> => super.delegate('query', 'change', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    projectsConnection: (args, info): Promise<ProjectConnection> => super.delegate('query', 'projectsConnection', args, {}, info),
    changesConnection: (args, info): Promise<ChangeConnection> => super.delegate('query', 'changesConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createProject: (args, info): Promise<Project> => super.delegate('mutation', 'createProject', args, {}, info),
    createChange: (args, info): Promise<Change> => super.delegate('mutation', 'createChange', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updateProject: (args, info): Promise<Project | null> => super.delegate('mutation', 'updateProject', args, {}, info),
    updateChange: (args, info): Promise<Change | null> => super.delegate('mutation', 'updateChange', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    deleteProject: (args, info): Promise<Project | null> => super.delegate('mutation', 'deleteProject', args, {}, info),
    deleteChange: (args, info): Promise<Change | null> => super.delegate('mutation', 'deleteChange', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    upsertProject: (args, info): Promise<Project> => super.delegate('mutation', 'upsertProject', args, {}, info),
    upsertChange: (args, info): Promise<Change> => super.delegate('mutation', 'upsertChange', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    updateManyProjects: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProjects', args, {}, info),
    updateManyChanges: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyChanges', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    deleteManyProjects: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProjects', args, {}, info),
    deleteManyChanges: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyChanges', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    project: (args, infoOrQuery): Promise<AsyncIterator<ProjectSubscriptionPayload>> => super.delegateSubscription('project', args, {}, infoOrQuery),
    change: (args, infoOrQuery): Promise<AsyncIterator<ChangeSubscriptionPayload>> => super.delegateSubscription('change', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}