// Imports
import { GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType } from 'graphql'

// App Imports
import { UserType, StyleSurveyType } from './types'
import { create, remove, updateStyleSummary } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Update Style Summary
export const userStyleSummaryUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    styleSurvey: {
      name: 'styleSurveyType',
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve: updateStyleSummary
}
