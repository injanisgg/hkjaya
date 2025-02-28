import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ComingSoon from '../img/comingsoon.png'
import Footer from '../components/Footer';

function SearchPage() {
  const navigate = useNavigate();
  const { inputSearch } = useParams();
  const products = useSelector((state) => state.products.list)
  
  // fungsi redirect ke detail produk
  const redirectToDetail = (id) => {
    navigate(`/produk/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } 
  
  return (
    <div>
      <Navbar />
      {/* title */}
      <h1 className="mt-32 text-2xl font-bold text-center py-5">Hasil pencarian untuk {inputSearch}</h1>
      {/* end title */}

      {/* content */}
      {products.length > 0 ? (
        <div className="mx-2 my-5 lg:mx-20 lg:my-10 flex flex-wrap justify-center gap-5">
          {products.map((product) => (
          <div key={product.id} className="flex flex-col hover:cursor-pointer gap-2 text-left transition ease-in-out delay-100 hover:-translate-y-2"
            onClick={() => redirectToDetail(product.id)}>
            <div className="relative">
              <img 
              src={product.image || ComingSoon} 
              alt={product.title}
              className='w-40 h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-xl object-cover border-[1.3px] border-primary-blue' />
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
              {product.title.length > 15 ? `${product.title.slice(0, 15)}...` : product.title}
            </p>
            <p className="w-40 lg:w-48 xl:w-52 text-sm">
              {product.description.length > 35
                ? `${product.description.slice(0, 35)}...`
                : product.description}
            </p>
            <p className="font-bold text-lg">Rp. {product.price}</p>
            <button className="rounded-xl bg-primary-blue text-sm text-white w-40 lg:w-48 xl:w-60 py-2 md:py-3" onClick={() => redirectToDetail(product.id)}>
              Lihat Produk
            </button>
          </div>
          ))}
        </div>
      ) : (
        <div className="mx-5 lg:mx-20 my-10 text-center">
          <h2 className="text-2xl font-bold">Produk tidak ditemukan</h2>
          <p className="text-lg">Mohon coba lagi dengan kata kunci yang berbeda</p>
        </div>
      )}
      {/* end content */}
      <Footer />
    </div>
  )
}

export default SearchPage;
