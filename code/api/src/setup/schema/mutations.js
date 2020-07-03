/* code-annotations-areid:
  Defines mutations to GraphQL endpoints
  Mutations are either create, update, or delete (Read handled by query)
  Mutations must be for fields contained in one of the 4 defined tables
*/

// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
