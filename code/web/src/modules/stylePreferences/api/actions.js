import { routeApi } from '../../../setup/routes';
import axios from 'axios';
import { query, mutation } from 'gql-query-builder';

export const STYLE_POST_RESPONSE = 'STYLE/STYLE_POST_RESPONSE'
export const STYLE_SUBMISSION_FAILURE = 'STYLES/STYLE_SUBMISSION_FAILURE'
export const STYLE_POST_FAILURE = 'STYLE/STYLE_POST_FAILURE'



export function loadPreferencesOptions(preferencesOptions = {}) {  
    return dispatch => {
        dispatch({
        type: LOAD_PREFERENCES,
        preferencesOptions
        })

        return axios.post(routeApi, query({
            operation: null,
            fields: []
        }))
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: STYLE_POST_RESPONSE,
                    error: null,
                    preferencesOptions: {}
        })
        } else {
            dispatch({
                type: STYLE_SUBMISSION_FAILURE,
                error: 'Some error occurred. Please try again.',
                preferencesOptions: {}

            })
            }
        })
        .catch(error => {
            dispatch({
                type: STYLE_POST_FAILURE,
                error: 'Some error occurred. Please try again.',
                preferencesOptions: {}
            })
        })
    }
}

