import { getIngredients } from '../../utils/api'
import { AppDispatch, AppThunk } from '../types'
import { TIngredient } from '../types/types'
export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED'

type getIngredientsRequestAction = {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}

type getIngredientsSuccessAction = {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: TIngredient[]
}

type getIngredientsFailedAction = {
    readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TIngredientsActions = getIngredientsRequestAction | getIngredientsSuccessAction | getIngredientsFailedAction


export const getAllIngredients = () => {

    return (dispatch: AppDispatch) => {
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

