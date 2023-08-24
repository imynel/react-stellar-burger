import { getIngredients } from '../../utils/api'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

export const GET_CONSTRUCTOR_REQUEST = 'GET_CONSTRUCTOR_REQUEST' 
export const GET_CONSTRUCTOR_SUCCESS = 'GET_CONSTRUCTOR_SUCCESS'
export const GET_CONSTRUCTOR_FAILED = 'GET_CONSTRUCTOR_FAILED'


export const getAllIngredients = () => {

    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
        })
        getIngredients()
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data,
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

