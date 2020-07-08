// Imports
import { GraphQLInt, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType, UserHasSummary } from './types'
import { getAll, getById, login, getGenders, hasSummary } from './resolvers'

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}

// HasStyleSummary
export const userHasSummary = {
  type: UserHasSummary,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: hasSummary
}
