// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import StylePreferences from '../../modules/stylePreferences/StylePreferences'




// Will need to add a new user route for the user/style-prevsdmvdskmkadsfkadffrences page
// will need to add a new user route for the user/style-prefrences/confirmation page

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  // subscriptions: {
  //   path: '/user/subscriptions',
  //   component: Subscriptions,
  //   auth: true
  // }

  subscriptions: {
    path: '/user/style-preferences',
    component: StylePreferences,
    auth: true
  }
}
