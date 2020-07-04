/* alatham-annotation
This file defines field names, data types, and relationships of the User model
*/

'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
    /* alatham-annotation
     likely to add a column here: styleSummary, type: DataTypes.TEXT
    */
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
