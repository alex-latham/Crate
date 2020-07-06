/* frondina-annotation
this is the model for the user
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
    /* frondina-annotation
     add style column here
    */
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
