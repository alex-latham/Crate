import {
    STYLE_POST_RESPONSE,
    STYLE_SUBMISSION_FAILURE,
    STYLE_POST_FAILURE
} from './actions';

const preferencesInitialState = {
    error: null,
    stylePreferences: []
}

//State 

export const styles = (state = preferencesInitialState, action) => {
    switch(action.type) {
        case STYLE_POST_RESPONSE:
            return {
                ...state,
                //come back to check spread!!
                error: null
            }
            case STYLE_SUBMISSION_FAILURE:
                return {
                    ...state,
                    error: null
                }
                case STYLE_POST_FAILURE:
                    return {
                        ...state,
                        error: null
                    }
        default: 
            return state          
    }
}
