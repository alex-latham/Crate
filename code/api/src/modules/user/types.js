// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql'

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

// Has Summary Type
// const UserStyleSummaryType = new GraphQLObjectType({
//   name: 'userStyleSummary',
//   description: 'User styleSummary Type',
//
//   fields: () => ({
//     styleSummary: { type: GraphQLString },
//   })
// })

// style form data type
const UserStyleFormDataType = new GraphQLInputObjectType({
  name: 'styleFormData',
  description: 'style form data',
  fields: () => ({
      tops: {
          type: GraphQLString,
      },
      pants: {
          type: GraphQLString,
      },
      dresses: {
          type: GraphQLString,
      },
      shoes: {
          type: GraphQLString,
      },
      accessories: {
          type: GraphQLString,
      }
  }),
});

export { UserType, UserLoginType, UserGenderType, UserStyleFormDataType }
