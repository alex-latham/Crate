import { routeApi } from '../../../setup/routes';
import axios from 'axios';
import { query, mutation } from 'gql-query-builder';

export const STYLE_POST_RESPONSE = 'STYLE/STYLE_POST_RESPONSE'
export const STYLE_SUBMISSION_FAILURE = 'STYLES/STYLE_SUBMISSION_FAILURE'
export const STYLE_POST_FAILURE = 'STYLE/STYLE_POST_FAILURE'

export function sendPreferences(stylePreferences) { 
        console.log(stylePreferences) 
    return dispatch => {
        return axios.post(routeApi, query({
            operation: 'StyleSurveyType',
            variables: stylePreferences,
            fields: ['shoes', 'tops', 'pants', 'dresses', 'accessories']
        }))
        .then(response => {
            console.log(response)
            // if (response.status === 200) {
        //         dispatch({
        //             type: STYLE_POST_RESPONSE,
        //             error: null,
        //             stylePreferences: stylePreferences
        // })
    })
        // dispatch({
        //     type: 'StyleSurveyType',
        //     stylePreferences: stylePreferences
        //     })
    //     } else {
    //         console.log(response)
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
    //             stylePreferences: []
    //         })
    //     })
    }
}

