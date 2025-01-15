import { selectedProduct } from "./actions";

// menyiapkan initialstate
const initialState = {
    list: [],
    merks: [],
    subCategories: [],
    selectedProduct: null,
    //search
    search: '',
    result: [],
    //filter
    selectedFilters: {
        merk: [],
        subCategory: []
    },
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
            return {}
        
        case "UPDATE_SELECTED_FILTERS":
            const { filterType, value } = action.payload;
            const currentFilters = state.selectedFilters[filterType] || []; // Tambahkan fallback array
            return {
                ...state,
                selectedFilters: {
                    ...state.selectedFilters,
                    [filterType]: currentFilters.includes(value)
                        ? currentFilters.filter(item => item !== value) // Hapus jika sudah ada
                        : [...currentFilters, value], // Tambahkan jika belum ada
                },
        };
              
        default:
            return state;
    }
}