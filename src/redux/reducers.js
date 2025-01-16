const initialState = {
    list: [],
    merks: [],
    subCategories: [],
    selectedProduct: null,
    search: '',
    result: [],
    selectedFilters: {
        merkFilter: [],
        subCategory: []
    },
};

// product reducer
export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return { ...state, list: action.payload }; //state mengembalikan apa yg ada di dalam state sebelumnya

        case "SET_PRODUCTS":
            return { ...state, list: action.payload }

        case "SEARCH_PRODUCTS":
            return { ...state, list: action.payload }
            
        default:
            return state;
    }
};

// category reducers
export const categoryReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            return { ...state, list: action.payload };

        case "SET_SUBCATEGORY":
            return { ...state, subCategories: action.payload };
        
        case "SET_MERK":
            return { ...state, merks: action.payload };
    
        case "SELECTED_PRODUCT":
            return { ...state, selectedProduct: action.payload };

        case "REMOVE_SELECTED_PRODUCT":
            return { ...state, selectedProduct: null, selectedFilters: initialState.selectedFilters };  

        // reducers.js
        case "UPDATE_SELECTED_FILTERS":
            const { filterType, value } = action.payload;
            const currentFilters = state.selectedFilters[filterType] || [];
            
            // Check if value is an array (for reset case)
            if (Array.isArray(value)) {
                return {
                    ...state,
                    selectedFilters: {
                        ...state.selectedFilters,
                        [filterType]: value
                    }
                };
            }

            // For single value updates
            const normalizedValue = typeof value === 'string' ? value.toLowerCase() : value;
            const updatedFilters = currentFilters.includes(normalizedValue)
                ? currentFilters.filter(item => item !== normalizedValue)
                : [...currentFilters, normalizedValue];
            
            return {
                ...state,
                selectedFilters: {
                    ...state.selectedFilters,
                    [filterType]: updatedFilters,
                },
            };
        default:
            return state;
    }
}