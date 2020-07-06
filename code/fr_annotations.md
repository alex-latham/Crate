# Files to Change for Crate Style Survey

## User Module:
* api/src/modules/user/model.js
    * Update User model to include styleSummary column
* api/src/modules/user/mutations.js
    * Add mutation for adding styleSummary to User model
* api/src/modules/user/query.js
    * Add query to check is user.styleSummary == 0 (NO STYLE)
* api/src/modules/user/resolvers.js
    * Add resolver for updating User model
* api/src/modules/user/types.js
    * Add line to UserType describing styleSummary

## Migrations:
* api/src/migrations/5-styleSummary.js
    * Add migration to add styleSummary column to User table

## Seeds:
* api/src/seeders/1-user.js
    * seeds will need to be updated to reflect style summary value of 0 for default users

## Images:
* api/public/images/survey
    * Add style survey images here

## Notes:
* One migration needs to happen AddColumnStyleSurvey to Users table, default value of 0
* Assign each value survery could be, (1, 2, or 3) is assigned to a style summary (Preppy but Punk, comfy, etc)
