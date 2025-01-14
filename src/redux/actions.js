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
export const filterSubCategory = (categoryName) => {
  return (dispatch) => {
    try {
      // Misalnya, productsData adalah array produk yang tersedia
      const filteredSubCategories = productsData
        .filter((product) => product.category === categoryName) // Filter berdasarkan kategori
        .map((product) => product.subcategory); // Ambil hanya subkategori
      const uniqueSubCategories = [...new Set(filteredSubCategories)]; // Hapus duplikat
      dispatch(setSubCategory(uniqueSubCategories)); // Kirim hasil filter ke reducer
    } catch (error) {
      console.log("Error filtering subcategory:", error);
    }
  };
};

// action untuk mengatur hasil filter merk
export const setMerk = (merks) => {
    return {
        type: "SET_MERK",
        payload: merks
    }
}

// menyimpan berdasarkan merk
export const filterMerk = (categoryName) => {
  return (dispatch) => {
    try {
      // Misalnya, productsData adalah array produk yang tersedia
      const filteredMerks = productsData
        .filter((product) => product.category === categoryName) // Filter berdasarkan kategori
        .map((product) => product.merk); // Ambil hanya merk
      const uniqueMerks = [...new Set(filteredMerks)]; // Hapus duplikat
      dispatch(setMerk(uniqueMerks)); // Kirim hasil filter ke reducer
    } catch (error) {
      console.log("Error filtering merk:", error);
    }
  };
};

// menampilkan produk berdasarkan id
export const selectedProduct = (id) => {
  const product = productsData.find((item) => item.id === id);
  return {
    type: "SELECTED_PRODUCT",
    payload: product, // Kirim produk lengkap
  };
};

// menghapus show produk dengan id
export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT"
  }
}



