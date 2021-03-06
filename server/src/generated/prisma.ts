import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    projects: <T = Array<Project | null>>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    changes: <T = Array<Change | null>>(args: { where?: ChangeWhereInput | null, orderBy?: ChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teams: <T = Array<Team | null>>(args: { where?: TeamWhereInput | null, orderBy?: TeamOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    project: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    change: <T = Change | null>(args: { where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    team: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    projectsConnection: <T = ProjectConnection>(args: { where?: ProjectWhereInput | null, orderBy?: ProjectOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    changesConnection: <T = ChangeConnection>(args: { where?: ChangeWhereInput | null, orderBy?: ChangeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamsConnection: <T = TeamConnection>(args: { where?: TeamWhereInput | null, orderBy?: TeamOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createProject: <T = Project>(args: { data: ProjectCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChange: <T = Change>(args: { data: ChangeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTeam: <T = Team>(args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProject: <T = Project | null>(args: { data: ProjectUpdateInput, where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateChange: <T = Change | null>(args: { data: ChangeUpdateInput, where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTeam: <T = Team | null>(args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProject: <T = Project | null>(args: { where: ProjectWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteChange: <T = Change | null>(args: { where: ChangeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTeam: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertProject: <T = Project>(args: { where: ProjectWhereUniqueInput, create: ProjectCreateInput, update: ProjectUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChange: <T = Change>(args: { where: ChangeWhereUniqueInput, create: ChangeCreateInput, update: ChangeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTeam: <T = Team>(args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProjects: <T = BatchPayload>(args: { data: ProjectUpdateInput, where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChanges: <T = BatchPayload>(args: { data: ChangeUpdateInput, where?: ChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTeams: <T = BatchPayload>(args: { data: TeamUpdateInput, where?: TeamWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProjects: <T = BatchPayload>(args: { where?: ProjectWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChanges: <T = BatchPayload>(args: { where?: ChangeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTeams: <T = BatchPayload>(args: { where?: TeamWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    project: <T = ProjectSubscriptionPayload | null>(args: { where?: ProjectSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    change: <T = ChangeSubscriptionPayload | null>(args: { where?: ChangeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    team: <T = TeamSubscriptionPayload | null>(args: { where?: TeamSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Project: (where?: ProjectWhereInput) => Promise<boolean>
  Change: (where?: ChangeWhereInput) => Promise<boolean>
  Team: (where?: TeamWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChange {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Change implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  author(where: UserWhereInput): User!
  project(where: ProjectWhereInput): Project!
}

"""A connection to a list of items."""
type ChangeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type ChangeEdge {
  """The item at the end of the edge."""
  node: Change!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ChangeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChangeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChangeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
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
  """Logical AND on all given filters."""
  AND: [ChangeWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChangeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChangeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  project: ProjectWhereInput
}

input ChangeWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  createChange(data: ChangeCreateInput!): Change!
  createTeam(data: TeamCreateInput!): Team!
  createUser(data: UserCreateInput!): User!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateChange(data: ChangeUpdateInput!, where: ChangeWhereUniqueInput!): Change
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteChange(where: ChangeWhereUniqueInput!): Change
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteUser(where: UserWhereUniqueInput!): User
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  upsertChange(where: ChangeWhereUniqueInput!, create: ChangeCreateInput!, update: ChangeUpdateInput!): Change!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyProjects(data: ProjectUpdateInput!, where: ProjectWhereInput): BatchPayload!
  updateManyChanges(data: ChangeUpdateInput!, where: ChangeWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  deleteManyChanges(where: ChangeWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Project implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  team(where: TeamWhereInput): Team!
  member(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  admin(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  change(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Change!]
}

"""A connection to a list of items."""
type ProjectConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  team: TeamCreateOneWithoutProjectInput!
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

input ProjectCreateManyWithoutTeamInput {
  create: [ProjectCreateWithoutTeamInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutChangeInput {
  create: ProjectCreateWithoutChangeInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutAdminInput {
  name: String!
  team: TeamCreateOneWithoutProjectInput!
  member: UserCreateManyWithoutProjectMemberInput
  change: ChangeCreateManyWithoutProjectInput
}

input ProjectCreateWithoutChangeInput {
  name: String!
  team: TeamCreateOneWithoutProjectInput!
  member: UserCreateManyWithoutProjectMemberInput
  admin: UserCreateManyWithoutProjectAdminInput
}

input ProjectCreateWithoutMemberInput {
  name: String!
  team: TeamCreateOneWithoutProjectInput!
  admin: UserCreateManyWithoutProjectAdminInput
  change: ChangeCreateManyWithoutProjectInput
}

input ProjectCreateWithoutTeamInput {
  name: String!
  member: UserCreateManyWithoutProjectMemberInput
  admin: UserCreateManyWithoutProjectAdminInput
  change: ChangeCreateManyWithoutProjectInput
}

"""An edge in a connection."""
type ProjectEdge {
  """The item at the end of the edge."""
  node: Project!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ProjectSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
}

input ProjectUpdateInput {
  name: String
  team: TeamUpdateOneWithoutProjectInput
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

input ProjectUpdateManyWithoutTeamInput {
  create: [ProjectCreateWithoutTeamInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  delete: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutTeamInput!]
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
  team: TeamUpdateOneWithoutProjectInput
  member: UserUpdateManyWithoutProjectMemberInput
  change: ChangeUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutChangeDataInput {
  name: String
  team: TeamUpdateOneWithoutProjectInput
  member: UserUpdateManyWithoutProjectMemberInput
  admin: UserUpdateManyWithoutProjectAdminInput
}

input ProjectUpdateWithoutMemberDataInput {
  name: String
  team: TeamUpdateOneWithoutProjectInput
  admin: UserUpdateManyWithoutProjectAdminInput
  change: ChangeUpdateManyWithoutProjectInput
}

input ProjectUpdateWithoutTeamDataInput {
  name: String
  member: UserUpdateManyWithoutProjectMemberInput
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

input ProjectUpdateWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutTeamDataInput!
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

input ProjectUpsertWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutTeamDataInput!
  create: ProjectCreateWithoutTeamInput!
}

input ProjectWhereInput {
  """Logical AND on all given filters."""
  AND: [ProjectWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProjectWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProjectWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  team: TeamWhereInput
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

type Query {
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  changes(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Change]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  project(where: ProjectWhereUniqueInput!): Project
  change(where: ChangeWhereUniqueInput!): Change
  team(where: TeamWhereUniqueInput!): Team
  user(where: UserWhereUniqueInput!): User
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  changesConnection(where: ChangeWhereInput, orderBy: ChangeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChangeConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  change(where: ChangeSubscriptionWhereInput): ChangeSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  project(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  owner(where: UserWhereInput): User!
  admin(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  member(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type TeamConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String
  project: ProjectCreateManyWithoutTeamInput
  owner: UserCreateOneWithoutTeamOwnerInput!
  admin: UserCreateManyWithoutTeamAdminInput
  member: UserCreateManyWithoutTeamMemberInput
}

input TeamCreateManyWithoutAdminInput {
  create: [TeamCreateWithoutAdminInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMemberInput {
  create: [TeamCreateWithoutMemberInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutOwnerInput {
  create: [TeamCreateWithoutOwnerInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutProjectInput {
  create: TeamCreateWithoutProjectInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutAdminInput {
  name: String
  project: ProjectCreateManyWithoutTeamInput
  owner: UserCreateOneWithoutTeamOwnerInput!
  member: UserCreateManyWithoutTeamMemberInput
}

input TeamCreateWithoutMemberInput {
  name: String
  project: ProjectCreateManyWithoutTeamInput
  owner: UserCreateOneWithoutTeamOwnerInput!
  admin: UserCreateManyWithoutTeamAdminInput
}

input TeamCreateWithoutOwnerInput {
  name: String
  project: ProjectCreateManyWithoutTeamInput
  admin: UserCreateManyWithoutTeamAdminInput
  member: UserCreateManyWithoutTeamMemberInput
}

input TeamCreateWithoutProjectInput {
  name: String
  owner: UserCreateOneWithoutTeamOwnerInput!
  admin: UserCreateManyWithoutTeamAdminInput
  member: UserCreateManyWithoutTeamMemberInput
}

"""An edge in a connection."""
type TeamEdge {
  """The item at the end of the edge."""
  node: Team!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type TeamPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
}

input TeamUpdateInput {
  name: String
  project: ProjectUpdateManyWithoutTeamInput
  owner: UserUpdateOneWithoutTeamOwnerInput
  admin: UserUpdateManyWithoutTeamAdminInput
  member: UserUpdateManyWithoutTeamMemberInput
}

input TeamUpdateManyWithoutAdminInput {
  create: [TeamCreateWithoutAdminInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutAdminInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutAdminInput!]
}

input TeamUpdateManyWithoutMemberInput {
  create: [TeamCreateWithoutMemberInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMemberInput!]
}

input TeamUpdateManyWithoutOwnerInput {
  create: [TeamCreateWithoutOwnerInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutOwnerInput!]
}

input TeamUpdateOneWithoutProjectInput {
  create: TeamCreateWithoutProjectInput
  connect: TeamWhereUniqueInput
  delete: Boolean
  update: TeamUpdateWithoutProjectDataInput
  upsert: TeamUpsertWithoutProjectInput
}

input TeamUpdateWithoutAdminDataInput {
  name: String
  project: ProjectUpdateManyWithoutTeamInput
  owner: UserUpdateOneWithoutTeamOwnerInput
  member: UserUpdateManyWithoutTeamMemberInput
}

input TeamUpdateWithoutMemberDataInput {
  name: String
  project: ProjectUpdateManyWithoutTeamInput
  owner: UserUpdateOneWithoutTeamOwnerInput
  admin: UserUpdateManyWithoutTeamAdminInput
}

input TeamUpdateWithoutOwnerDataInput {
  name: String
  project: ProjectUpdateManyWithoutTeamInput
  admin: UserUpdateManyWithoutTeamAdminInput
  member: UserUpdateManyWithoutTeamMemberInput
}

input TeamUpdateWithoutProjectDataInput {
  name: String
  owner: UserUpdateOneWithoutTeamOwnerInput
  admin: UserUpdateManyWithoutTeamAdminInput
  member: UserUpdateManyWithoutTeamMemberInput
}

input TeamUpdateWithWhereUniqueWithoutAdminInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutAdminDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMemberInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMemberDataInput!
}

input TeamUpdateWithWhereUniqueWithoutOwnerInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutOwnerDataInput!
}

input TeamUpsertWithoutProjectInput {
  update: TeamUpdateWithoutProjectDataInput!
  create: TeamCreateWithoutProjectInput!
}

input TeamUpsertWithWhereUniqueWithoutAdminInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutAdminDataInput!
  create: TeamCreateWithoutAdminInput!
}

input TeamUpsertWithWhereUniqueWithoutMemberInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMemberDataInput!
  create: TeamCreateWithoutMemberInput!
}

input TeamUpsertWithWhereUniqueWithoutOwnerInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutOwnerDataInput!
  create: TeamCreateWithoutOwnerInput!
}

input TeamWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  project_every: ProjectWhereInput
  project_some: ProjectWhereInput
  project_none: ProjectWhereInput
  owner: UserWhereInput
  admin_every: UserWhereInput
  admin_some: UserWhereInput
  admin_none: UserWhereInput
  member_every: UserWhereInput
  member_some: UserWhereInput
  member_none: UserWhereInput
}

input TeamWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  TeamOwner(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  TeamAdmin(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  TeamMember(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  projectMember(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  projectAdmin(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  TeamOwner: TeamCreateManyWithoutOwnerInput
  TeamAdmin: TeamCreateManyWithoutAdminInput
  TeamMember: TeamCreateManyWithoutMemberInput
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

input UserCreateManyWithoutTeamAdminInput {
  create: [UserCreateWithoutTeamAdminInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamMemberInput {
  create: [UserCreateWithoutTeamMemberInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTeamOwnerInput {
  create: UserCreateWithoutTeamOwnerInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectAdminInput {
  email: String!
  password: String!
  name: String!
  TeamOwner: TeamCreateManyWithoutOwnerInput
  TeamAdmin: TeamCreateManyWithoutAdminInput
  TeamMember: TeamCreateManyWithoutMemberInput
  projectMember: ProjectCreateManyWithoutMemberInput
}

input UserCreateWithoutProjectMemberInput {
  email: String!
  password: String!
  name: String!
  TeamOwner: TeamCreateManyWithoutOwnerInput
  TeamAdmin: TeamCreateManyWithoutAdminInput
  TeamMember: TeamCreateManyWithoutMemberInput
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

input UserCreateWithoutTeamAdminInput {
  email: String!
  password: String!
  name: String!
  TeamOwner: TeamCreateManyWithoutOwnerInput
  TeamMember: TeamCreateManyWithoutMemberInput
  projectMember: ProjectCreateManyWithoutMemberInput
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

input UserCreateWithoutTeamMemberInput {
  email: String!
  password: String!
  name: String!
  TeamOwner: TeamCreateManyWithoutOwnerInput
  TeamAdmin: TeamCreateManyWithoutAdminInput
  projectMember: ProjectCreateManyWithoutMemberInput
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

input UserCreateWithoutTeamOwnerInput {
  email: String!
  password: String!
  name: String!
  TeamAdmin: TeamCreateManyWithoutAdminInput
  TeamMember: TeamCreateManyWithoutMemberInput
  projectMember: ProjectCreateManyWithoutMemberInput
  projectAdmin: ProjectCreateManyWithoutAdminInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  TeamMember: TeamUpdateManyWithoutMemberInput
  projectMember: ProjectUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  TeamMember: TeamUpdateManyWithoutMemberInput
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

input UserUpdateManyWithoutTeamAdminInput {
  create: [UserCreateWithoutTeamAdminInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamAdminInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamAdminInput!]
}

input UserUpdateManyWithoutTeamMemberInput {
  create: [UserCreateWithoutTeamMemberInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamMemberInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamMemberInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutTeamOwnerInput {
  create: UserCreateWithoutTeamOwnerInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTeamOwnerDataInput
  upsert: UserUpsertWithoutTeamOwnerInput
}

input UserUpdateWithoutProjectAdminDataInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  TeamMember: TeamUpdateManyWithoutMemberInput
  projectMember: ProjectUpdateManyWithoutMemberInput
}

input UserUpdateWithoutProjectMemberDataInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  TeamMember: TeamUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateWithoutTeamAdminDataInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamMember: TeamUpdateManyWithoutMemberInput
  projectMember: ProjectUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateWithoutTeamMemberDataInput {
  email: String
  password: String
  name: String
  TeamOwner: TeamUpdateManyWithoutOwnerInput
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  projectMember: ProjectUpdateManyWithoutMemberInput
  projectAdmin: ProjectUpdateManyWithoutAdminInput
}

input UserUpdateWithoutTeamOwnerDataInput {
  email: String
  password: String
  name: String
  TeamAdmin: TeamUpdateManyWithoutAdminInput
  TeamMember: TeamUpdateManyWithoutMemberInput
  projectMember: ProjectUpdateManyWithoutMemberInput
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

input UserUpdateWithWhereUniqueWithoutTeamAdminInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamAdminDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamMemberInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamMemberDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutTeamOwnerInput {
  update: UserUpdateWithoutTeamOwnerDataInput!
  create: UserCreateWithoutTeamOwnerInput!
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

input UserUpsertWithWhereUniqueWithoutTeamAdminInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamAdminDataInput!
  create: UserCreateWithoutTeamAdminInput!
}

input UserUpsertWithWhereUniqueWithoutTeamMemberInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamMemberDataInput!
  create: UserCreateWithoutTeamMemberInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  TeamOwner_every: TeamWhereInput
  TeamOwner_some: TeamWhereInput
  TeamOwner_none: TeamWhereInput
  TeamAdmin_every: TeamWhereInput
  TeamAdmin_some: TeamWhereInput
  TeamAdmin_none: TeamWhereInput
  TeamMember_every: TeamWhereInput
  TeamMember_some: TeamWhereInput
  TeamMember_none: TeamWhereInput
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
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ChangeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ProjectOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type TeamOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type UserOrderByInput =   'id_ASC' |
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

export interface ChangeCreateInput {
  text: String
  author: UserCreateOneInput
  project: ProjectCreateOneWithoutChangeInput
}

export interface ChangeCreateManyWithoutProjectInput {
  create?: ChangeCreateWithoutProjectInput[] | ChangeCreateWithoutProjectInput | null
  connect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput | null
}

export interface ChangeCreateWithoutProjectInput {
  text: String
  author: UserCreateOneInput
}

export interface ChangeSubscriptionWhereInput {
  AND?: ChangeSubscriptionWhereInput[] | ChangeSubscriptionWhereInput | null
  OR?: ChangeSubscriptionWhereInput[] | ChangeSubscriptionWhereInput | null
  NOT?: ChangeSubscriptionWhereInput[] | ChangeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ChangeWhereInput | null
}

export interface ChangeUpdateInput {
  text?: String | null
  author?: UserUpdateOneInput | null
  project?: ProjectUpdateOneWithoutChangeInput | null
}

export interface ChangeUpdateManyWithoutProjectInput {
  create?: ChangeCreateWithoutProjectInput[] | ChangeCreateWithoutProjectInput | null
  connect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput | null
  disconnect?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput | null
  delete?: ChangeWhereUniqueInput[] | ChangeWhereUniqueInput | null
  update?: ChangeUpdateWithWhereUniqueWithoutProjectInput[] | ChangeUpdateWithWhereUniqueWithoutProjectInput | null
  upsert?: ChangeUpsertWithWhereUniqueWithoutProjectInput[] | ChangeUpsertWithWhereUniqueWithoutProjectInput | null
}

export interface ChangeUpdateWithoutProjectDataInput {
  text?: String | null
  author?: UserUpdateOneInput | null
}

export interface ChangeUpdateWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput
  data: ChangeUpdateWithoutProjectDataInput
}

export interface ChangeUpsertWithWhereUniqueWithoutProjectInput {
  where: ChangeWhereUniqueInput
  update: ChangeUpdateWithoutProjectDataInput
  create: ChangeCreateWithoutProjectInput
}

export interface ChangeWhereInput {
  AND?: ChangeWhereInput[] | ChangeWhereInput | null
  OR?: ChangeWhereInput[] | ChangeWhereInput | null
  NOT?: ChangeWhereInput[] | ChangeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  author?: UserWhereInput | null
  project?: ProjectWhereInput | null
}

export interface ChangeWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProjectCreateInput {
  name: String
  team: TeamCreateOneWithoutProjectInput
  member?: UserCreateManyWithoutProjectMemberInput | null
  admin?: UserCreateManyWithoutProjectAdminInput | null
  change?: ChangeCreateManyWithoutProjectInput | null
}

export interface ProjectCreateManyWithoutAdminInput {
  create?: ProjectCreateWithoutAdminInput[] | ProjectCreateWithoutAdminInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
}

export interface ProjectCreateManyWithoutMemberInput {
  create?: ProjectCreateWithoutMemberInput[] | ProjectCreateWithoutMemberInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
}

export interface ProjectCreateManyWithoutTeamInput {
  create?: ProjectCreateWithoutTeamInput[] | ProjectCreateWithoutTeamInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
}

export interface ProjectCreateOneWithoutChangeInput {
  create?: ProjectCreateWithoutChangeInput | null
  connect?: ProjectWhereUniqueInput | null
}

export interface ProjectCreateWithoutAdminInput {
  name: String
  team: TeamCreateOneWithoutProjectInput
  member?: UserCreateManyWithoutProjectMemberInput | null
  change?: ChangeCreateManyWithoutProjectInput | null
}

export interface ProjectCreateWithoutChangeInput {
  name: String
  team: TeamCreateOneWithoutProjectInput
  member?: UserCreateManyWithoutProjectMemberInput | null
  admin?: UserCreateManyWithoutProjectAdminInput | null
}

export interface ProjectCreateWithoutMemberInput {
  name: String
  team: TeamCreateOneWithoutProjectInput
  admin?: UserCreateManyWithoutProjectAdminInput | null
  change?: ChangeCreateManyWithoutProjectInput | null
}

export interface ProjectCreateWithoutTeamInput {
  name: String
  member?: UserCreateManyWithoutProjectMemberInput | null
  admin?: UserCreateManyWithoutProjectAdminInput | null
  change?: ChangeCreateManyWithoutProjectInput | null
}

export interface ProjectSubscriptionWhereInput {
  AND?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  OR?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  NOT?: ProjectSubscriptionWhereInput[] | ProjectSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProjectWhereInput | null
}

export interface ProjectUpdateInput {
  name?: String | null
  team?: TeamUpdateOneWithoutProjectInput | null
  member?: UserUpdateManyWithoutProjectMemberInput | null
  admin?: UserUpdateManyWithoutProjectAdminInput | null
  change?: ChangeUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateManyWithoutAdminInput {
  create?: ProjectCreateWithoutAdminInput[] | ProjectCreateWithoutAdminInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithWhereUniqueWithoutAdminInput[] | ProjectUpdateWithWhereUniqueWithoutAdminInput | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput[] | ProjectUpsertWithWhereUniqueWithoutAdminInput | null
}

export interface ProjectUpdateManyWithoutMemberInput {
  create?: ProjectCreateWithoutMemberInput[] | ProjectCreateWithoutMemberInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithWhereUniqueWithoutMemberInput[] | ProjectUpdateWithWhereUniqueWithoutMemberInput | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutMemberInput[] | ProjectUpsertWithWhereUniqueWithoutMemberInput | null
}

export interface ProjectUpdateManyWithoutTeamInput {
  create?: ProjectCreateWithoutTeamInput[] | ProjectCreateWithoutTeamInput | null
  connect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  disconnect?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  delete?: ProjectWhereUniqueInput[] | ProjectWhereUniqueInput | null
  update?: ProjectUpdateWithWhereUniqueWithoutTeamInput[] | ProjectUpdateWithWhereUniqueWithoutTeamInput | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput[] | ProjectUpsertWithWhereUniqueWithoutTeamInput | null
}

export interface ProjectUpdateOneWithoutChangeInput {
  create?: ProjectCreateWithoutChangeInput | null
  connect?: ProjectWhereUniqueInput | null
  delete?: Boolean | null
  update?: ProjectUpdateWithoutChangeDataInput | null
  upsert?: ProjectUpsertWithoutChangeInput | null
}

export interface ProjectUpdateWithoutAdminDataInput {
  name?: String | null
  team?: TeamUpdateOneWithoutProjectInput | null
  member?: UserUpdateManyWithoutProjectMemberInput | null
  change?: ChangeUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateWithoutChangeDataInput {
  name?: String | null
  team?: TeamUpdateOneWithoutProjectInput | null
  member?: UserUpdateManyWithoutProjectMemberInput | null
  admin?: UserUpdateManyWithoutProjectAdminInput | null
}

export interface ProjectUpdateWithoutMemberDataInput {
  name?: String | null
  team?: TeamUpdateOneWithoutProjectInput | null
  admin?: UserUpdateManyWithoutProjectAdminInput | null
  change?: ChangeUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateWithoutTeamDataInput {
  name?: String | null
  member?: UserUpdateManyWithoutProjectMemberInput | null
  admin?: UserUpdateManyWithoutProjectAdminInput | null
  change?: ChangeUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutAdminDataInput
}

export interface ProjectUpdateWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutMemberDataInput
}

export interface ProjectUpdateWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutTeamDataInput
}

export interface ProjectUpsertWithoutChangeInput {
  update: ProjectUpdateWithoutChangeDataInput
  create: ProjectCreateWithoutChangeInput
}

export interface ProjectUpsertWithWhereUniqueWithoutAdminInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutAdminDataInput
  create: ProjectCreateWithoutAdminInput
}

export interface ProjectUpsertWithWhereUniqueWithoutMemberInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutMemberDataInput
  create: ProjectCreateWithoutMemberInput
}

export interface ProjectUpsertWithWhereUniqueWithoutTeamInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutTeamDataInput
  create: ProjectCreateWithoutTeamInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | ProjectWhereInput | null
  OR?: ProjectWhereInput[] | ProjectWhereInput | null
  NOT?: ProjectWhereInput[] | ProjectWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  team?: TeamWhereInput | null
  member_every?: UserWhereInput | null
  member_some?: UserWhereInput | null
  member_none?: UserWhereInput | null
  admin_every?: UserWhereInput | null
  admin_some?: UserWhereInput | null
  admin_none?: UserWhereInput | null
  change_every?: ChangeWhereInput | null
  change_some?: ChangeWhereInput | null
  change_none?: ChangeWhereInput | null
}

export interface ProjectWhereUniqueInput {
  id?: ID_Input | null
}

export interface TeamCreateInput {
  name?: String | null
  project?: ProjectCreateManyWithoutTeamInput | null
  owner: UserCreateOneWithoutTeamOwnerInput
  admin?: UserCreateManyWithoutTeamAdminInput | null
  member?: UserCreateManyWithoutTeamMemberInput | null
}

export interface TeamCreateManyWithoutAdminInput {
  create?: TeamCreateWithoutAdminInput[] | TeamCreateWithoutAdminInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
}

export interface TeamCreateManyWithoutMemberInput {
  create?: TeamCreateWithoutMemberInput[] | TeamCreateWithoutMemberInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
}

export interface TeamCreateManyWithoutOwnerInput {
  create?: TeamCreateWithoutOwnerInput[] | TeamCreateWithoutOwnerInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
}

export interface TeamCreateOneWithoutProjectInput {
  create?: TeamCreateWithoutProjectInput | null
  connect?: TeamWhereUniqueInput | null
}

export interface TeamCreateWithoutAdminInput {
  name?: String | null
  project?: ProjectCreateManyWithoutTeamInput | null
  owner: UserCreateOneWithoutTeamOwnerInput
  member?: UserCreateManyWithoutTeamMemberInput | null
}

export interface TeamCreateWithoutMemberInput {
  name?: String | null
  project?: ProjectCreateManyWithoutTeamInput | null
  owner: UserCreateOneWithoutTeamOwnerInput
  admin?: UserCreateManyWithoutTeamAdminInput | null
}

export interface TeamCreateWithoutOwnerInput {
  name?: String | null
  project?: ProjectCreateManyWithoutTeamInput | null
  admin?: UserCreateManyWithoutTeamAdminInput | null
  member?: UserCreateManyWithoutTeamMemberInput | null
}

export interface TeamCreateWithoutProjectInput {
  name?: String | null
  owner: UserCreateOneWithoutTeamOwnerInput
  admin?: UserCreateManyWithoutTeamAdminInput | null
  member?: UserCreateManyWithoutTeamMemberInput | null
}

export interface TeamSubscriptionWhereInput {
  AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TeamWhereInput | null
}

export interface TeamUpdateInput {
  name?: String | null
  project?: ProjectUpdateManyWithoutTeamInput | null
  owner?: UserUpdateOneWithoutTeamOwnerInput | null
  admin?: UserUpdateManyWithoutTeamAdminInput | null
  member?: UserUpdateManyWithoutTeamMemberInput | null
}

export interface TeamUpdateManyWithoutAdminInput {
  create?: TeamCreateWithoutAdminInput[] | TeamCreateWithoutAdminInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  update?: TeamUpdateWithWhereUniqueWithoutAdminInput[] | TeamUpdateWithWhereUniqueWithoutAdminInput | null
  upsert?: TeamUpsertWithWhereUniqueWithoutAdminInput[] | TeamUpsertWithWhereUniqueWithoutAdminInput | null
}

export interface TeamUpdateManyWithoutMemberInput {
  create?: TeamCreateWithoutMemberInput[] | TeamCreateWithoutMemberInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  update?: TeamUpdateWithWhereUniqueWithoutMemberInput[] | TeamUpdateWithWhereUniqueWithoutMemberInput | null
  upsert?: TeamUpsertWithWhereUniqueWithoutMemberInput[] | TeamUpsertWithWhereUniqueWithoutMemberInput | null
}

export interface TeamUpdateManyWithoutOwnerInput {
  create?: TeamCreateWithoutOwnerInput[] | TeamCreateWithoutOwnerInput | null
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput | null
  update?: TeamUpdateWithWhereUniqueWithoutOwnerInput[] | TeamUpdateWithWhereUniqueWithoutOwnerInput | null
  upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput[] | TeamUpsertWithWhereUniqueWithoutOwnerInput | null
}

export interface TeamUpdateOneWithoutProjectInput {
  create?: TeamCreateWithoutProjectInput | null
  connect?: TeamWhereUniqueInput | null
  delete?: Boolean | null
  update?: TeamUpdateWithoutProjectDataInput | null
  upsert?: TeamUpsertWithoutProjectInput | null
}

export interface TeamUpdateWithoutAdminDataInput {
  name?: String | null
  project?: ProjectUpdateManyWithoutTeamInput | null
  owner?: UserUpdateOneWithoutTeamOwnerInput | null
  member?: UserUpdateManyWithoutTeamMemberInput | null
}

export interface TeamUpdateWithoutMemberDataInput {
  name?: String | null
  project?: ProjectUpdateManyWithoutTeamInput | null
  owner?: UserUpdateOneWithoutTeamOwnerInput | null
  admin?: UserUpdateManyWithoutTeamAdminInput | null
}

export interface TeamUpdateWithoutOwnerDataInput {
  name?: String | null
  project?: ProjectUpdateManyWithoutTeamInput | null
  admin?: UserUpdateManyWithoutTeamAdminInput | null
  member?: UserUpdateManyWithoutTeamMemberInput | null
}

export interface TeamUpdateWithoutProjectDataInput {
  name?: String | null
  owner?: UserUpdateOneWithoutTeamOwnerInput | null
  admin?: UserUpdateManyWithoutTeamAdminInput | null
  member?: UserUpdateManyWithoutTeamMemberInput | null
}

export interface TeamUpdateWithWhereUniqueWithoutAdminInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutAdminDataInput
}

export interface TeamUpdateWithWhereUniqueWithoutMemberInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMemberDataInput
}

export interface TeamUpdateWithWhereUniqueWithoutOwnerInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutOwnerDataInput
}

export interface TeamUpsertWithoutProjectInput {
  update: TeamUpdateWithoutProjectDataInput
  create: TeamCreateWithoutProjectInput
}

export interface TeamUpsertWithWhereUniqueWithoutAdminInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutAdminDataInput
  create: TeamCreateWithoutAdminInput
}

export interface TeamUpsertWithWhereUniqueWithoutMemberInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMemberDataInput
  create: TeamCreateWithoutMemberInput
}

export interface TeamUpsertWithWhereUniqueWithoutOwnerInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutOwnerDataInput
  create: TeamCreateWithoutOwnerInput
}

export interface TeamWhereInput {
  AND?: TeamWhereInput[] | TeamWhereInput | null
  OR?: TeamWhereInput[] | TeamWhereInput | null
  NOT?: TeamWhereInput[] | TeamWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  project_every?: ProjectWhereInput | null
  project_some?: ProjectWhereInput | null
  project_none?: ProjectWhereInput | null
  owner?: UserWhereInput | null
  admin_every?: UserWhereInput | null
  admin_some?: UserWhereInput | null
  admin_none?: UserWhereInput | null
  member_every?: UserWhereInput | null
  member_some?: UserWhereInput | null
  member_none?: UserWhereInput | null
}

export interface TeamWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  TeamOwner?: TeamCreateManyWithoutOwnerInput | null
  TeamAdmin?: TeamCreateManyWithoutAdminInput | null
  TeamMember?: TeamCreateManyWithoutMemberInput | null
  projectMember?: ProjectCreateManyWithoutMemberInput | null
  projectAdmin?: ProjectCreateManyWithoutAdminInput | null
}

export interface UserCreateManyWithoutProjectAdminInput {
  create?: UserCreateWithoutProjectAdminInput[] | UserCreateWithoutProjectAdminInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutProjectMemberInput {
  create?: UserCreateWithoutProjectMemberInput[] | UserCreateWithoutProjectMemberInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutTeamAdminInput {
  create?: UserCreateWithoutTeamAdminInput[] | UserCreateWithoutTeamAdminInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutTeamMemberInput {
  create?: UserCreateWithoutTeamMemberInput[] | UserCreateWithoutTeamMemberInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutTeamOwnerInput {
  create?: UserCreateWithoutTeamOwnerInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutProjectAdminInput {
  email: String
  password: String
  name: String
  TeamOwner?: TeamCreateManyWithoutOwnerInput | null
  TeamAdmin?: TeamCreateManyWithoutAdminInput | null
  TeamMember?: TeamCreateManyWithoutMemberInput | null
  projectMember?: ProjectCreateManyWithoutMemberInput | null
}

export interface UserCreateWithoutProjectMemberInput {
  email: String
  password: String
  name: String
  TeamOwner?: TeamCreateManyWithoutOwnerInput | null
  TeamAdmin?: TeamCreateManyWithoutAdminInput | null
  TeamMember?: TeamCreateManyWithoutMemberInput | null
  projectAdmin?: ProjectCreateManyWithoutAdminInput | null
}

export interface UserCreateWithoutTeamAdminInput {
  email: String
  password: String
  name: String
  TeamOwner?: TeamCreateManyWithoutOwnerInput | null
  TeamMember?: TeamCreateManyWithoutMemberInput | null
  projectMember?: ProjectCreateManyWithoutMemberInput | null
  projectAdmin?: ProjectCreateManyWithoutAdminInput | null
}

export interface UserCreateWithoutTeamMemberInput {
  email: String
  password: String
  name: String
  TeamOwner?: TeamCreateManyWithoutOwnerInput | null
  TeamAdmin?: TeamCreateManyWithoutAdminInput | null
  projectMember?: ProjectCreateManyWithoutMemberInput | null
  projectAdmin?: ProjectCreateManyWithoutAdminInput | null
}

export interface UserCreateWithoutTeamOwnerInput {
  email: String
  password: String
  name: String
  TeamAdmin?: TeamCreateManyWithoutAdminInput | null
  TeamMember?: TeamCreateManyWithoutMemberInput | null
  projectMember?: ProjectCreateManyWithoutMemberInput | null
  projectAdmin?: ProjectCreateManyWithoutAdminInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateManyWithoutProjectAdminInput {
  create?: UserCreateWithoutProjectAdminInput[] | UserCreateWithoutProjectAdminInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutProjectAdminInput[] | UserUpdateWithWhereUniqueWithoutProjectAdminInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutProjectAdminInput[] | UserUpsertWithWhereUniqueWithoutProjectAdminInput | null
}

export interface UserUpdateManyWithoutProjectMemberInput {
  create?: UserCreateWithoutProjectMemberInput[] | UserCreateWithoutProjectMemberInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutProjectMemberInput[] | UserUpdateWithWhereUniqueWithoutProjectMemberInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutProjectMemberInput[] | UserUpsertWithWhereUniqueWithoutProjectMemberInput | null
}

export interface UserUpdateManyWithoutTeamAdminInput {
  create?: UserCreateWithoutTeamAdminInput[] | UserCreateWithoutTeamAdminInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutTeamAdminInput[] | UserUpdateWithWhereUniqueWithoutTeamAdminInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutTeamAdminInput[] | UserUpsertWithWhereUniqueWithoutTeamAdminInput | null
}

export interface UserUpdateManyWithoutTeamMemberInput {
  create?: UserCreateWithoutTeamMemberInput[] | UserCreateWithoutTeamMemberInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutTeamMemberInput[] | UserUpdateWithWhereUniqueWithoutTeamMemberInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutTeamMemberInput[] | UserUpsertWithWhereUniqueWithoutTeamMemberInput | null
}

export interface UserUpdateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  delete?: Boolean | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneWithoutTeamOwnerInput {
  create?: UserCreateWithoutTeamOwnerInput | null
  connect?: UserWhereUniqueInput | null
  delete?: Boolean | null
  update?: UserUpdateWithoutTeamOwnerDataInput | null
  upsert?: UserUpsertWithoutTeamOwnerInput | null
}

export interface UserUpdateWithoutProjectAdminDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
}

export interface UserUpdateWithoutProjectMemberDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateWithoutTeamAdminDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateWithoutTeamMemberDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamOwner?: TeamUpdateManyWithoutOwnerInput | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateWithoutTeamOwnerDataInput {
  email?: String | null
  password?: String | null
  name?: String | null
  TeamAdmin?: TeamUpdateManyWithoutAdminInput | null
  TeamMember?: TeamUpdateManyWithoutMemberInput | null
  projectMember?: ProjectUpdateManyWithoutMemberInput | null
  projectAdmin?: ProjectUpdateManyWithoutAdminInput | null
}

export interface UserUpdateWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutProjectAdminDataInput
}

export interface UserUpdateWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutProjectMemberDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTeamAdminInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamAdminDataInput
}

export interface UserUpdateWithWhereUniqueWithoutTeamMemberInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamMemberDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutTeamOwnerInput {
  update: UserUpdateWithoutTeamOwnerDataInput
  create: UserCreateWithoutTeamOwnerInput
}

export interface UserUpsertWithWhereUniqueWithoutProjectAdminInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutProjectAdminDataInput
  create: UserCreateWithoutProjectAdminInput
}

export interface UserUpsertWithWhereUniqueWithoutProjectMemberInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutProjectMemberDataInput
  create: UserCreateWithoutProjectMemberInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamAdminInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamAdminDataInput
  create: UserCreateWithoutTeamAdminInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamMemberInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamMemberDataInput
  create: UserCreateWithoutTeamMemberInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  TeamOwner_every?: TeamWhereInput | null
  TeamOwner_some?: TeamWhereInput | null
  TeamOwner_none?: TeamWhereInput | null
  TeamAdmin_every?: TeamWhereInput | null
  TeamAdmin_some?: TeamWhereInput | null
  TeamAdmin_none?: TeamWhereInput | null
  TeamMember_every?: TeamWhereInput | null
  TeamMember_some?: TeamWhereInput | null
  TeamMember_none?: TeamWhereInput | null
  projectMember_every?: ProjectWhereInput | null
  projectMember_some?: ProjectWhereInput | null
  projectMember_none?: ProjectWhereInput | null
  projectAdmin_every?: ProjectWhereInput | null
  projectAdmin_some?: ProjectWhereInput | null
  projectAdmin_none?: ProjectWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateChange {
  count: Int
}

export interface AggregateProject {
  count: Int
}

export interface AggregateTeam {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Change extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  author: User
  project: Project
}

/*
 * A connection to a list of items.

 */
export interface ChangeConnection {
  pageInfo: PageInfo
  edges: Array<ChangeEdge | null>
  aggregate: AggregateChange
}

/*
 * An edge in a connection.

 */
export interface ChangeEdge {
  node: Change
  cursor: String
}

export interface ChangePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
}

export interface ChangeSubscriptionPayload {
  mutation: MutationType
  node?: Change | null
  updatedFields?: Array<String> | null
  previousValues?: ChangePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Project extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  team: Team
  member?: Array<User> | null
  admin?: Array<User> | null
  change?: Array<Change> | null
}

/*
 * A connection to a list of items.

 */
export interface ProjectConnection {
  pageInfo: PageInfo
  edges: Array<ProjectEdge | null>
  aggregate: AggregateProject
}

/*
 * An edge in a connection.

 */
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
  node?: Project | null
  updatedFields?: Array<String> | null
  previousValues?: ProjectPreviousValues | null
}

export interface Team extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String | null
  project?: Array<Project> | null
  owner: User
  admin?: Array<User> | null
  member?: Array<User> | null
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: Array<TeamEdge | null>
  aggregate: AggregateTeam
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface TeamPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name?: String | null
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team | null
  updatedFields?: Array<String> | null
  previousValues?: TeamPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  TeamOwner?: Array<Team> | null
  TeamAdmin?: Array<Team> | null
  TeamMember?: Array<Team> | null
  projectMember?: Array<Project> | null
  projectAdmin?: Array<Project> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string