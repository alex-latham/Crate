// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}

// Update User styleSummary
export async function updateStyleSummary(parentValue, { id, styleSurvey }) {
  var talliedStyles = tallyStyles(styleSurvey);
  var orderedStyles = orderStyles(talliedStyles);
  var styleSummary = generateStyleSummary(orderedStyles);
  var user = await models.User.findOne({ where: { id } })
  await user.update(
    { styleSummary },
    { where: { id }
  })
  return user
}

/*
*-------------------*
| private functions |
*-------------------*
*/

function tallyStyles(styleSurvey) {
  const talliedStyles = styleSurvey.reduce(function (acc, style) {
    if (typeof acc[style] == 'undefined') {
      acc[style] = 1;
    } else {
      acc[style] += 1;
    }
    return acc;
  }, {});
  return talliedStyles
}

function orderStyles(inputHash) {
  var resultHash = {};
  var keys = Object.keys(inputHash);
  keys.sort(function(a, b) {
    return inputHash[a] - inputHash[b]
  }).reverse().forEach(function(k) {
    resultHash[k] = inputHash[k];
  });
  const outputArray = Object.keys(resultHash)
  return outputArray;
}

function generateStyleSummary(orderedStyles) {
  let styleSummary;
  if (orderedStyles[1] == undefined) {
    styleSummary = orderedStyles[0];
  } else {
    styleSummary = `${ orderedStyles[0] }, but ${ orderedStyles[1] }`
  }
  return styleSummary;
}
