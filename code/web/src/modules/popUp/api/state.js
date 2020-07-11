import {
  STYLE_TEXT,
} from './actions';

const styleDescriptionState = {
  error: null,
  receivedStyle: '',
  
}

export const styleDescription = (state = styleDescriptionState, action) => {
  switch(action.type) {
      case STYLE_TEXT:
          return {
              ...state,
              error: null
          }
      default: 
          return state          
  }
}