import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST } from "../actions/ingredients"


const initialState = {
    allIngredients: [],
    currentIngredients: [{
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
     {
        "_id":"60666c42cc7b410027a1a9b5",
        "name":"Говяжий метеорит (отбивная)",
        "type":"main",
        "proteins":800,
        "fat":800,
        "carbohydrates":300,
        "calories":2674,
        "price":3000,
        "image":"https://code.s3.yandex.net/react/code/meat-04.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9b6",
        "name":"Биокотлета из марсианской Магнолии",
        "type":"main",
        "proteins":420,
        "fat":142,
        "carbohydrates":242,
        "calories":4242,
        "price":424,
        "image":"https://code.s3.yandex.net/react/code/meat-01.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
        "__v":0
     },
     {
        "_id":"60666c42cc7b410027a1a9b7",
        "name":"Соус Spicy-X",
        "type":"sauce",
        "proteins":30,
        "fat":20,
        "carbohydrates":40,
        "calories":30,
        "price":90,
        "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
        "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
        "__v":0
     },],
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredient: null,
    bun: null,
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
        default: {

            return store
        }
    }
}