#### src/index.js
  - Starts & configures server/GraphQL

#### src/setup/load-modules.js
  - Loads environment variable
  - Enables cross origin requests
  - Loads middleware for logging, parsing

#### src/setup/upload.js
  - Loads modules & configures process used for working with files

#### src/setup/authentication.js
  - Configures authentication via JSON web token

#### src/config/server.json
  - Defines server details

#### src/setup/graphql.js
 - Sets up GraphQL to function as the server & provide API endpoints for this app

#### src/setup/start-server.js
  - Actually starts server (or handles error if it fails)

#### src/setup/schema/index.js
  - Defines schema used by GraphQL (every endpoint expects query and/or mutation)

#### src/setup/schema/queries.js
  - Defines queries to GraphQL endpoints

#### src/setup/schema/mutations.js
  - Defines mutations (create, update, delete) to Graphql endpoints

#### src/modules/crate
*(As an example for other tables)*
  - **src/modules/crate/model.js**
    - Uses Sequlize ORM to interact with PostgresQL db
    - defines fields with data types & relationships
  - **src/modules/crate/mutations.js**
    - Formats & returns query response based on resolver action taken
  - **src/modules/crate/query.js**
    - Formats & returns crate object based on specified resolver
  - **src/modules/crate/resolvers.js**
    - Defines any logic used in queries - including role/permission & query validity
  - **src/modules/crate/types.js**
    - Defines object & data types to be returned
