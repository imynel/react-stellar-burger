

const initialState = {
    allIngredients: [],
    currentIngredients: [],
    
    ingredient: null,
    order: {
        number: null
    }
}

export const ingredientsReducer = (store = initialState, action) => {
    switch(action.type) {
        
        default: {
            return store
        }
    }
}