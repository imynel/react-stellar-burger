import { ADD_INGREDIENT, CHANGE_INGREDIENT, DELETE_INGREDIENT, GET_CONSTRUCTOR_FAILED, GET_CONSTRUCTOR_REQUEST, GET_CONSTRUCTOR_SUCCESS } from '../actions/constructor'
import { TIngredient } from '../types/types'
import { TConstructorActions } from '../actions/constructor'

type order = {
    number: null | number;
}

type State = {
    currentIngredients: TIngredient[];
    currentIngredientsRequest: boolean;
    currentIngredientsFailed: boolean;
    bun: TIngredient | null;
    order: order;
}

const initialState: State = {
    currentIngredients: [],
    currentIngredientsRequest: false,
    currentIngredientsFailed: false,
    bun: null,
    order: {
        number: null
    },
}

export const constructorReducer = (store = initialState, action: TConstructorActions): State => {
    switch(action.type) {
        case ADD_INGREDIENT: {
            const newIngredient = {
                ...action.ingredient,
                uniqueId: action.uniqueId
            }
            if (newIngredient.type === 'bun') {
                return {
                    ...store, bun: newIngredient // возможно поменять на action.ungredient
                }
            } else {
                return {
                    ...store, currentIngredients: [...store.currentIngredients, newIngredient]
                }
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...store, currentIngredients: [...store.currentIngredients.filter(item => {
                    if (item.uniqueId !== action.ingredient.uniqueId) return true
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