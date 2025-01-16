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
        <div className="mx-20 my-10 grid grid-cols-5 gap-5">
          {products.map((product) => (
          <div key={product.id} className="flex flex-col hover:cursor-pointer gap-2 text-left transition ease-in-out delay-100 hover:-translate-y-2"
          onClick={() => redirectToDetail(product.id)}>
            <div className="relative">
              <img 
              src={ComingSoon} 
              alt={product.title}
              className='xl:w-52 xl:h-52 rounded-xl object-cover' />
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
            <p className="font-bold text-lg">Rp. </p>
            <button className="rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2" onClick={() => redirectToDetail(product.id)}>
              Lihat Produk
            </button>
          </div>
          ))}
        </div>
      ) : (
        <div className="mx-20 my-10 text-center">
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
