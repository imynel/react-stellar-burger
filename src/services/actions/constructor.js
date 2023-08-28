export const ADD_INGREDIENT = 'ADD_INGREDIENT' 
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'
export const GET_CONSTRUCTOR_REQUEST = 'GET_CONSTRUCTOR_REQUEST' 
export const GET_CONSTRUCTOR_SUCCESS = 'GET_CONSTRUCTOR_SUCCESS'
export const GET_CONSTRUCTOR_FAILED = 'GET_CONSTRUCTOR_FAILED'


export const addIngredient = (ingredient) => ({
    type: ADD_INGREDIENT,
    ingredient: ingredient,
})

export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT,
    ingredient: ingredient,
})