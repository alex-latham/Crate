// Quinn
// npm i redux-devtools-extension -s
// import { composeWithDevTools } from 'redux-devtools-extension'

// THIS IS THE STORE FOR REACT-REDUX

// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../modules/common/api/state'
import user from '../modules/user/api/state'
import * as product from '../modules/product/api/state'
import * as subscription from '../modules/subscription/api/state'
import * as crate from '../modules/crate/api/state'

// App Reducer
const appReducer = combineReducers({
  common,
  user,
  ...product,
  ...subscription,
  ...crate
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
  // un-comment this line in whe lines 1 and 2 have been installed
  // devTools,
  initialState,

  compose(
    applyMiddleware(thunk),
  )
)