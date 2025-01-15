import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import ComingSoon from "../img/comingsoon.png";
import { productCategory } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

function Produk({ headTitle, categoryName }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categories.list); // Mengambil data produk
  const itemsPerPage = 28; // Jumlah item per halaman
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedFilters = useSelector((state) => state.categories.selectedFilters);

  // state untuk menentukan halaman aktif pada pagination
  const [currentPage, setCurrentPage] = useState(1); 

  // state untuk filter
  const [filteredProducts, setFilteredProducts] = useState([]);

  // state untuk menampilkan data dari filter atau display
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // mengambil data produk berdasar kategori
  useEffect(() => {
    if (categoryName) {
      dispatch(productCategory(categoryName)); // Set produk kategori berdasar nama kategori yang diinput
    }
  }, [categoryName]);

  // mengambil data produk berdasarkan filter
  useEffect(() => {
    const filterProducts = () => {
      return products.filter((product) => {
        const matchesMerk = selectedFilters.merk.length === 0 || selectedFilters.merk.includes(product.merk);
        const matchesSubCategory = selectedFilters.subCategory.length === 0 || selectedFilters.subCategory.includes(product.subcategory);
        return matchesMerk && matchesSubCategory;
      });
    };

    const filtered = filterProducts();
    setFilteredProducts(filtered); //menyimpan produk yg difilter
    setIsFilterApplied(selectedFilters.merk.length > 0 || selectedFilters.subCategory.length > 0)
  }, [products, selectedFilters]);

  // Data produk yang ditampilkan berdasarkan halaman aktif
  const displayedProducts = products ? products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : [];  

  // menentukan data yang ditampilkan
  const productToDisplay = isFilterApplied ? filteredProducts : displayedProducts;

  // Hitung jumlah halaman untuk pagination
  const totalPages = isFilterApplied ? Math.ceil(filteredProducts.length / itemsPerPage) : Math.ceil(products.length / itemsPerPage);

  // Fungsi untuk mengubah halaman
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // fungsi redirect ke detail produk
  const redirectToDetail = (id) => {
    navigate(`/produk/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 

  return (
    <div className="mb-20">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center py-5">{headTitle}</h1>
      {/* End Title */}

      <div className="flex gap-5 mx-20">
        {/* Filter */}
        <div className="flex flex-col gap-5">
          <Filters title={"Kategori"} content={categoryName} />
          <Filters title={"Merk"} content={categoryName} />
        </div>
        {/* End Filter */}

        {/* List Produk */}
        <div className="grid grid-cols-4 grid-rows-7 gap-5">
          {/* mapping product */}
          {productToDisplay.length > 0 ? (
            productToDisplay.map((product) => (
              <div
              key={product.id}
              className="flex flex-col hover:cursor-pointer gap-2 text-left transition ease-in-out delay-100 hover:-translate-y-2"
              onClick={() => redirectToDetail(product.id)}
            >
              <div className="relative">
                <img
                  src={ComingSoon}
                  alt="Gambar produk"
                  className="xl:w-52 xl:h-52 rounded-xl object-cover"
                />
              </div>
              <div className="flex gap-2">
                <p className="text-xs text-white px-2 py-1 rounded-full w-max bg-red-600">
                  {product.subcategory}
                </p>
                <p className="text-xs text-white px-2 py-1 rounded-full w-max bg-red-600">
                  {product.merk}
                </p>
              </div>
              <p className="font-bold text-base">
                {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
              </p>
              <p className="xl:w-52 text-sm">
                {product.description.length > 40
                  ? `${product.description.slice(0, 40)}...`
                  : product.description}
              </p>
              <p className="font-bold text-lg">Rp. {product.price}</p>
              <button className="rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2" onClick={redirectToDetail}>
                Lihat Produk
              </button>
            </div>
            ))
            ) : ( 
              <p>No product Found</p>
          )};
          {/* end mapping product based on filter */}
        
        </div>
        {/* End List Produk */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10 ml-52">
        <button
          className="px-3 py-1 bg-gray-300 rounded-md"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 bg-gray-300 rounded-md"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {/* End Pagination */}
    </div>
  );
}

export default Produk;
