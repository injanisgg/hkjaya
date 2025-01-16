// Import data produk dari file JSON lokal
import productsData from '../data/products.json';

// Action untuk memuat semua produk
export const loadProducts = () => ({
    type: "LOAD_PRODUCTS",
    payload: productsData // Menggunakan data dari file JSON
});

// Action untuk mengatur kategori
export const setCategory = (categories) => ({
    type: "SET_CATEGORY",
    payload: categories
});

// Action untuk mengatur subkategori
export const setSubCategory = (subCategories) => ({
    type: "SET_SUBCATEGORY",
    payload: subCategories
});

// Action untuk mengatur merek
export const setMerk = (merks) => ({
    type: "SET_MERK",
    payload: merks
});

// Action untuk menyimpan product kategori
export const productCategory = (input) => {
    return (dispatch) => {
        try {
            const normalizedInput = input.toLowerCase();
            const filterCategory = Array.isArray(productsData)
                ? productsData.filter((product) => 
                    product.category.toLowerCase().includes(normalizedInput))
                : [];
            dispatch(setCategory(filterCategory));
        } catch (error) {
            console.error("Error filtering category:", error);
        }
    };
};

// action untuk mengatur filter merk
export const filterMerk = (categoryName) => {
    return (dispatch) => {
        try {
            const normalizedCategoryName = categoryName.toLowerCase();
            const filteredMerks = Array.isArray(productsData)
                ? productsData
                    .filter((product) => 
                        product.category.toLowerCase() === normalizedCategoryName)
                    .map((product) => product.merk?.toLowerCase())
                    .filter(Boolean)
                : [];

            const uniqueMerks = [...new Set(filteredMerks)].sort();
            dispatch(setMerk(uniqueMerks));
        } catch (error) {
            console.error("Error filtering merk:", error);
        }
    };
};

// action untuk mengatur filter subcategory
export const filterSubCategory = (categoryName) => {
    return (dispatch) => {
        try {
            if (!categoryName) {
                console.warn("Category name is empty or invalid.");
                return;
            }

            const normalizedCategoryName = categoryName.toLowerCase();
            const filteredSubCategories = Array.isArray(productsData)
                ? productsData
                    .filter((product) => 
                        product.category.toLowerCase() === normalizedCategoryName)
                    .map((product) => product.subcategory?.toLowerCase())
                    .filter(Boolean)
                : [];

            const uniqueSubCategories = [...new Set(filteredSubCategories)].sort();
            dispatch(setSubCategory(uniqueSubCategories));
        } catch (error) {
            console.error("Error filtering subcategory:", error);
        }
    };
};

// Action untuk memilih produk berdasarkan ID
export const selectedProduct = (id) => {
    const product = productsData.find((item) => item.id === id);
    return {
        type: "SELECTED_PRODUCT",
        payload: product // Kirim produk lengkap
    };
};

// Action untuk menghapus produk yang dipilih
export const removeSelectedProduct = () => ({
    type: "REMOVE_SELECTED_PRODUCT"
});

// Action untuk memperbarui filter yang dipilih
export const updateSelectedFilters = (filterType, value) => ({
    type: "UPDATE_SELECTED_FILTERS",
    payload: { filterType, value }
});
