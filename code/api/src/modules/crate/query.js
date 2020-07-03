/* code-annotations-areid:
  Imports GraphQL data types to be used in returning query results
*/
// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

/* code-annotations-areid:
  Imports crate object as defined in types
  Imports relevant resolvers (searching for all & by id). Notably exlcudes resolvers used in mutations.
*/
// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

/* code-annotations-areid:
  Returns results for specified resolver
*/
// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
