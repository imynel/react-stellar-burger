import { postOrderNumber } from '../../utils/api'
import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT' 
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const CHANGE_INGREDIENT = 'CHANGE_INGREDIENT'
export const GET_CONSTRUCTOR_REQUEST = 'GET_CONSTRUCTOR_REQUEST' 
export const GET_CONSTRUCTOR_SUCCESS = 'GET_CONSTRUCTOR_SUCCESS'
export const GET_CONSTRUCTOR_FAILED = 'GET_CONSTRUCTOR_FAILED'



export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    ingredient: ingredient,
    key: uuidv4(),
})

export const deleteIngredient = (ingredient, key) => ({
    type: DELETE_INGREDIENT,
    ingredient: ingredient,
    key: key,
})

export const changeIngedients = (fromIndex, toIndex) => ({
    type: CHANGE_INGREDIENT,
    fromIndex: fromIndex,
    toIndex: toIndex
  });

export const getOrderNumder = (id) => {

    return function(dispatch) {
        dispatch({
            type: GET_CONSTRUCTOR_REQUEST,
        })
        postOrderNumber(id)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_CONSTRUCTOR_SUCCESS,
                        number: res.order.number,
                    });
                } else {
                    dispatch({
                        type: GET_CONSTRUCTOR_FAILED,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: GET_CONSTRUCTOR_FAILED,
                });
              });
    }
}