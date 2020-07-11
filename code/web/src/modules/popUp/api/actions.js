import { routeApi } from '../../../setup/routes';
import axios from 'axios';
import { query, mutation } from 'gql-query-builder';

export const STYLE_TEXT = 'STYLE/STYLE_STYLE_TEXT_MESSAGE'

export const receiveStyle = (style = "") => {
  console.log('pop-up')
   // return dispatch => {
  //     dispatch({
  //     type: SEND_PREFERENCES,
  //     stylePreferences
  //     })

  // CHANGE TO >GET
  //     return axios.post(routeApi, query({
  //         operation: 'stylePreferences',
  //         fields: []
  //     }))
  //     .then(response => {
  //         if (response.status === 200) {
  //             dispatch({
  //                 type: STYLE_POST_RESPONSE,
  //                 error: null,
  //                 stylePreferences: {}
  //     })
  //     } else {
  //         dispatch({
  //             type: STYLE_SUBMISSION_FAILURE,
  //             error: 'Some error occurred. Please try again.',
  //             stylePreferences: {}

  //         })
  //         }
  //     })
  //     .catch(error => {
  //         dispatch({
  //             type: STYLE_POST_FAILURE,
  //             error: 'Some error occurred. Please try again.',
  //             preferencesOptions: {}
  //         })
  //     })
  // }
}

