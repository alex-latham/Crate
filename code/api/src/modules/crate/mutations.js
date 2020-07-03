/* code-annotations-areid:
  Imports GraphQL data types to be used in returning mutation results
*/
// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

/* code-annotations-areid:
  Imports crate object as defined in types
  Imports relevant resolvers
*/
// App Imports
import CrateType from './types'
import { create, remove, update } from './resolvers'

/* code-annotations-areid:
  Defines actions to be taken for specified resolvers
  Creates return values
*/
// Crate create
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
