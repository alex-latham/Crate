import { routeApi } from '../../../setup/routes';
import axios from 'axios';
import { query, mutation } from 'gql-query-builder';

export const STYLE_POST_RESPONSE = 'STYLE/STYLE_POST_RESPONSE'
export const STYLE_SUBMISSION_FAILURE = 'STYLES/STYLE_SUBMISSION_FAILURE'
export const STYLE_POST_FAILURE = 'STYLE/STYLE_POST_FAILURE'



export function sendPreferences(stylePreferences = []) {  
    console.log('made-it')
    // return dispatch => {
    //     dispatch({
    //     type: SEND_PREFERENCES,
    //     stylePreferences
    //     })

    //     return axios.post(routeApi, query({
    //         operation: null,
    //         fields: []
    //     }))
    //     .then(response => {
    //         if (response.status === 200) {
    //             dispatch({
    //                 type: STYLE_POST_RESPONSE,
    //                 error: null,
    //                 stylePreferences: []
    //     })
    //     } else {
    //         dispatch({
    //             type: STYLE_SUBMISSION_FAILURE,
    //             error: 'Some error occurred. Please try again.',
    //             stylePreferences: []

    //         })
    //         }
    //     })
    //     .catch(error => {
    //         dispatch({
    //             type: STYLE_POST_FAILURE,
    //             error: 'Some error occurred. Please try again.',
    //             preferencesOptions: []
    //         })
    //     })
    // }
}

