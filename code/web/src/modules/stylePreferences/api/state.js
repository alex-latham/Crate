import {
    STYLE_POST_RESPONSE,
    STYLE_SUBMISSION_FAILURE,
    STYLE_POST_FAILURE
} from './actions';

const preferencesInitialState = {
    error: null,
    preferencesOptions: {}
}

//State 

export const styles = (state = preferencesInitialState, action) => {
    switch(DefaultAppSyncMutationAdapter.type) {
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
