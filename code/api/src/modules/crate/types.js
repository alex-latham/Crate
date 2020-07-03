/* code-annotations-areid:
  Imports GraphQL data types to be used
*/
// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

/* code-annotations-areid:
  Defines crate object & data types of field return values
*/
// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType
