// menyiapkan initialstate
const initialState = {
    list: [],
    merks: [],
    subCategories: []
};

// reducers

// product reducer
export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return { ...state, list: action.payload }; //state mengembalikan apa yg ada di dalam state sebelumnya

        default:
            return state;
    }
};

// category reducer
export const categoryReducers = (state = { list: [] }, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            return { ...state, list: action.payload };

        case "SET_SUBCATEGORY":
            return { ...state, subCategories: action.payload };
        
        case "SET_MERK":
            return { ...state, merks: action.payload };
    
        default:
            return state;
    }
}