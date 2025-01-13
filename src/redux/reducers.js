// menyiapkan initialstate
const initialState = {
    list: [],
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
            return { ...state, list: action.payload }

        case "SET_SUBCATEGORY":
            return { ...state, list: action.payload }
    
        default:
            return state;
    }
}