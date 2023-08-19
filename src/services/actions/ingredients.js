import { getIngredients } from '../../utils/api'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'


export const getAllIngredients = () => {
    
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
            isLoading: true
        })
        getIngredients()
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredint: res.data,
                        isLoading: false,
                    });
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED,
                        isLoading: true,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: GET_INGREDIENTS_FAILED,
                  isLoading: true,
                });
              });
    }
}