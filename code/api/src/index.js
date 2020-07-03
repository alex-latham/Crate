/* code-annotations-areid:
  Imports express to use as backend for application
*/
// Imports
import express from 'express'

/* code-annotations-areid:
  Imports files necessary to configure & start server, GraphQL
*/
// App Imports
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'


/* code-annotations-areid:
  Starts server & saves to variable, then configures server & graphql
*/
// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup uploads
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)
