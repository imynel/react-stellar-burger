import { postOrderNumber } from '../../utils/api'
import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../types/types';

export const ADD_INGREDIENT: 'ADD_INGREDIENT'  = 'ADD_INGREDIENT' 
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT'
export const CHANGE_INGREDIENT: 'CHANGE_INGREDIENT' = 'CHANGE_INGREDIENT'
export const GET_CONSTRUCTOR_REQUEST: 'GET_CONSTRUCTOR_REQUEST' = 'GET_CONSTRUCTOR_REQUEST' 
export const GET_CONSTRUCTOR_SUCCESS: 'GET_CONSTRUCTOR_SUCCESS' = 'GET_CONSTRUCTOR_SUCCESS'
export const GET_CONSTRUCTOR_FAILED: 'GET_CONSTRUCTOR_FAILED' = 'GET_CONSTRUCTOR_FAILED'

export type addIngredientAction = {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
    readonly key: string
}
export type deleteIngredientAction = {
    readonly type: typeof DELETE_INGREDIENT;
    readonly ingredient: TIngredient;
    readonly key: string
}
export type changeIngedientsAction = {
    readonly type: typeof CHANGE_INGREDIENT;
    readonly fromIndex: number;
    readonly toIndex: number;
}
export type getConstructorRequestAction = {
    readonly type: typeof GET_CONSTRUCTOR_REQUEST;
}
export type getConstructorSuccessAction = {
    readonly type: typeof GET_CONSTRUCTOR_SUCCESS;
}
export type getConstructorFailedAction = {
    readonly type: typeof GET_CONSTRUCTOR_FAILED;
}

export type TConstructorActions = addIngredientAction 
    | deleteIngredientAction 
    | changeIngedientsAction 
    | getConstructorRequestAction 
    | getConstructorSuccessAction 
    | getConstructorFailedAction



export const addIngredient = (ingredient: TIngredient) :addIngredientAction  => ({
    type: ADD_INGREDIENT,
    ingredient: ingredient,
    key: uuidv4(),
})

export const deleteIngredient = (ingredient: TIngredient, key: string): deleteIngredientAction => ({
    type: DELETE_INGREDIENT,
    ingredient: ingredient,
    key: key,
})

export const changeIngedients = (fromIndex: number, toIndex: number): changeIngedientsAction => ({
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