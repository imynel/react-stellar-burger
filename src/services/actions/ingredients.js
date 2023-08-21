import { getIngredients } from '../../utils/api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

debugger
export const getAllIngredients = () => {
    debugger
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
        })
        getIngredients()
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredints: res.data
                    });
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: GET_INGREDIENTS_FAILED,
                });
              });
    }
}