import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters";
import ComingSoon from "../img/comingsoon.png";
import { productCategory } from "../redux/actions";

function Produk({ headTitle, categoryName }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categories.list); // Mengambil data produk
  const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
  const itemsPerPage = 28; // Jumlah item per halaman

  useEffect(() => {
    if (categoryName) {
      dispatch(productCategory(categoryName)); // Set produk kategori berdasar nama kategori yang diinput
    }
  }, [categoryName]);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Data produk yang ditampilkan berdasarkan halaman aktif
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fungsi untuk mengubah halaman
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
        <div className="grid grid-cols-4 gap-5">
          {displayedProducts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col hover:cursor-pointer gap-2 text-left"
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
                  {item.subcategory}
                </p>
                <p className="text-xs text-white px-2 py-1 rounded-full w-max bg-red-600">
                  {item.merk}
                </p>
              </div>
              <p className="font-bold text-base">
                {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
              </p>
              <p className="xl:w-52 text-sm">
                {item.description.length > 50
                  ? `${item.description.slice(0, 50)}...`
                  : item.description}
              </p>
              <p className="font-bold text-lg">Rp. {item.price}</p>
              <button className="rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2">
                Lihat Produk
              </button>
            </div>
          ))}
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
