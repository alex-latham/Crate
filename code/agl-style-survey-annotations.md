# Files to Change for Crate Style Survey

## User Module:
* api/src/modules/user/model.js
    * Update User model fields to include styleSummary
* api/src/modules/user/mutations.js
    * Add mutation for updating styleSummary on User model
* api/src/modules/user/query.js
    * Add query to return boolean on whether or not User has a styleSummary on record
* api/src/modules/user/resolvers.js
    * Add resolver for updating User model (see crate/resolvers.js for example)
* api/src/modules/user/types.js
    * Add line to UserType describing styleSummary

## Migrations:
* api/src/migrations/5-styleSummary.js
    * Add migration to add styleSummary column to User table

## Seeds:
* api/src/seeders/1-user.js
    * Might need to add a null field for styleSummary

## Images:
* api/public/images/survey
    * Add style survey images here

## Notes:
* Where will the styleSummarizer live?
* Alternative to storing a single string for summary (e.g., "Classy but trashy"), we could store two fields like primaryStyle: "classy", secondaryStyle: "trashy".
