import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from "../actions/ingredients"


const initialState = {
    allIngredients: [],
    currentIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredient: null,
    order: {
        number: null
    }
}

export const ingredientsReducer = (store = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            debugger
            return {
                ...store, ingredientsRequest: true, ingredientsFailed: false
            }
        }

        case GET_INGREDIENTS_SUCCESS: {
            debugger
            return {
                ...store, ingredientsRequest: false, ingredientsFailed: false, allIngredients: action.ingredients
            }
        }

        case GET_INGREDIENTS_FAILED: {
            debugger
            return {
                ...store, ingredientsFailed: true, ingredientsRequest: false
            }
        }
        default: {

            return store
        }
    }
}