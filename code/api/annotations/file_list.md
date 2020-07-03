## src/index.js
  - Starts & configures server/GraphQL

## src/setup/load-modules.js
  - Loads environment variable
  - Enables cross origin requests
  - Loads middleware for logging, parsing

## src/setup/upload.js
  - Loads modules & configures process used for working with files

## src/setup/authentication.js
  - Configures authentication via JSON web token

## src/config/server.json
  - Defines server details

## src/setup/graphql.js
 - Sets up GraphQL to function as the server & provide API endpoints for this app

## src/setup/start-server.js
  - Actually starts server (or handles error if it fails)
