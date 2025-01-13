// mengambil data
import productsData from '../data/products.json';

// menyimpan data
export const loadProducts = () => ({
    type: "LOAD_PRODUCTS",
    payload: productsData //menggunakan data dari local json
});

// action untuk mengatur hasil filter category
export const setCategory = (categories) => {
    return {
        type: "SET_CATEGORY",
        payload: categories
    }
}

// menyimpan berdasarkan category
export const productCategory = (input) => {
    return (dispatch) => {
        try {
            const filterCategory = productsData.filter((product) => product.category.includes(input)); //produk adalah variable yg dibuat
            dispatch(setCategory(filterCategory))

        } catch (error) {
            console.log("error load data")
        }
    }
}

// action untuk mengatur hasil filter category
export const setSubCategory = (subCategories) => {
    return {
        type: "SET_SUBCATEGORY",
        payload: subCategories
    }
}

// menyimpan berdasarkan subcategory
export const subCategory = (input) => {
    return (dispatch) => {
        try {
            const filterSubCategory = productsData.filter((product) => product.subcategory.includes(input)); //produk adalah variable yg dibuat
            dispatch(setSubCategory(filterSubCategory))

        } catch (error) {
            console.log("error load data")
        }
    }
}




