import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from "../actions/ingredients"
import { ADD_INGREDIENT, CHANGE_INGREDIENT, DELETE_INGREDIENT, GET_CONSTRUCTOR_FAILED, GET_CONSTRUCTOR_REQUEST, GET_CONSTRUCTOR_SUCCESS } from '../actions/constructor'


const initialState = {
    allIngredients: [],
    currentIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    currentIngredientsRequest: false,
    currentIngredientsFailed: false,
    bun: null,
    order: {
        number: null
    },
}

export const ingredientsReducer = (store = initialState, action) => {
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
        case ADD_INGREDIENT: {
            if (action.ingredient.type === 'bun') {
                return {
                    ...store, bun: action.ingredient
                }
            } else {
                return {
                    ...store, currentIngredients: [...store.currentIngredients, action.ingredient]
                }
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...store, currentIngredients: [...store.currentIngredients.filter(item => {
                    if (item.key !== action.key) return true
                })]
            }
        }

        case GET_CONSTRUCTOR_REQUEST: {
            return {
                ...store, currentIngredientsRequest: true, currentIngredientsFailed: false,
            }
        }

        case GET_CONSTRUCTOR_SUCCESS: {
            return {
                ...store, currentIngredientsRequest: false, currentIngredientsFailed: false, order: { number: action.number }, currentIngredients: []
            }
        }
        case GET_CONSTRUCTOR_FAILED: {
            return {
                ...store, currentIngredientsRequest: false, currentIngredientsFailed: true
            }
        }
        case CHANGE_INGREDIENT:
            const allCurrentIngredients = [...store.currentIngredients];
            allCurrentIngredients.splice(action.toIndex, 0, allCurrentIngredients.splice(action.fromIndex, 1)[0]);
            return {...store, currentIngredients: [...allCurrentIngredients],}
        default: {
            return store
        }
    }
}