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

// Filter produk berdasarkan kategori
export const productCategory = (input) => {
    return (dispatch) => {
        try {
            // Validasi dan filter produk berdasarkan kategori
            const filterCategory = Array.isArray(productsData)
                ? productsData.filter((product) => product.category.includes(input))
                : [];
            dispatch(setCategory(filterCategory));
        } catch (error) {
            console.error("Error filtering category:", error);
        }
    };
};

// Action untuk mengatur subkategori
export const setSubCategory = (subCategories) => ({
    type: "SET_SUBCATEGORY",
    payload: subCategories
});

// Filter subkategori berdasarkan kategori
export const filterSubCategory = (categoryName) => {
    return (dispatch) => {
        try {
            // Filter subkategori unik berdasarkan kategori
            const filteredSubCategories = Array.isArray(productsData)
                ? productsData
                      .filter((product) => product.category === categoryName)
                      .map((product) => product.subcategory)
                      .filter((subcategory) => subcategory) // Hapus nilai undefined/null
                : [];
            const uniqueSubCategories = [...new Set(filteredSubCategories)].sort(); // Hapus duplikat dan urutkan secara abjad
            dispatch(setSubCategory(uniqueSubCategories));
        } catch (error) {
            console.error("Error filtering subcategory:", error);
        }
    };
};

// Action untuk mengatur merek
export const setMerk = (merks) => ({
    type: "SET_MERK",
    payload: merks
});

// Filter merek berdasarkan kategori
export const filterMerk = (categoryName) => {
    return (dispatch) => {
        try {
            // Filter merek unik berdasarkan kategori
            const filteredMerks = Array.isArray(productsData)
                ? productsData
                      .filter((product) => product.category === categoryName)
                      .map((product) => product.merk)
                      .filter((merk) => merk) // Hapus nilai undefined/null
                : [];
            const uniqueMerks = [...new Set(filteredMerks)].sort(); // Hapus duplikat
            dispatch(setMerk(uniqueMerks));
        } catch (error) {
            console.error("Error filtering merk:", error);
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
