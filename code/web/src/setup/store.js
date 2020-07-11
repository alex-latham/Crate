// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'
import * as stylePreferences from '../modules/stylePreferences/api/state'
import * as PopUp from '../modules/popUp/api/state'



// App Reducer

/// if we have to make any changes to the reducers it may have to be in the user reducer and or the product file as well.
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate,
  ...stylePreferences,
  popUp,
})

// Root Reducer
export const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}

// Load initial state from server side
let initialState
if (typeof window !== 'undefined') {
  initialState = window.__INITIAL_STATE__
  delete window.__INITIAL_STATE__
}

// Store
export const store = createStore(
  rootReducer,
  initialState,

  compose(
    composeWithDevTools(applyMiddleware(thunk)),
  )
)