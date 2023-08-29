import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from "../actions/ingredients"
import { ADD_INGREDIENT, DELETE_INGREDIENT } from '../actions/constructor'


const initialState = {
    allIngredients: [],
    currentIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredient: null,
    bun: {
        "_id":"60666c42cc7b410027a1a9b1",
        "name":"Краторная булка N-200i",
        "type":"bun",
        "proteins":80,
        "fat":24,
        "carbohydrates":53,
        "calories":420,
        "price":1255,
        "image":"https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v":0
     },
    order: {
        number: null
    }
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
                ...store, currentIngredients: [...store.currentIngredients.filter((item) => {
                    if (item !== action.ingredient) return true
                    else return false
                })]
            }
        }
        default: {

            return store
        }
    }
}