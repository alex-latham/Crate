/* code-annotations-areid:
  Defines schema used by GraphQL
  Every GraphQL endpoint hit will expect a query & mutation
*/

// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
