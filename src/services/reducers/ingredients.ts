import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST, TIngredientsActions } from "../actions/ingredients"
import { TIngredient } from "../types/types"

type State = {
    allIngredients: TIngredient[];
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
}

const initialState: State = {
    allIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
}

export const ingredientsReducer = (store = initialState, action: TIngredientsActions) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...store, ingredientsRequest: true, ingredientsFailed: false,
            }
        }

        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...store, ingredientsRequest: false, ingredientsFailed: false, allIngredients: action.ingredients,
            }
        }

        case GET_INGREDIENTS_FAILED: {
            return {
                ...store, ingredientsFailed: true, ingredientsRequest: false
            }
        }
        default: {
            return store
        }
    }
}