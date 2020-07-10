// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    styleSummary: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

// Style Survey Type
const StyleSurveyType = new GraphQLInputObjectType({
  name: 'styleSurveyType',
  description: 'style survey results data type',
  fields: () => ({
    tops: {
      type: new GraphQLNonNull(GraphQLString)
    },
    pants: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dresses: {
      type: new GraphQLNonNull(GraphQLString)
    },
    shoes: {
      type: new GraphQLNonNull(GraphQLString)
    },
    accessories: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

export { UserType, UserLoginType, UserGenderType, StyleSurveyType }
