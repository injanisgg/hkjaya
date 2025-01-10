import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DetailImg from '../img/detail.jpg'

function DetailProduk() {
  return (
    <div>
      <Navbar />
      <button className='w-max py-3 px-4 rounded-full bg-white hover:border-2 border-primary-blue fixed left-8 z-10'><i className="fa-solid fa-arrow-left"></i></button>
      {/* content detail */}
      <div>
        <div className="flex mt-32 gap-20">
            <div className="relative">
                <img src={DetailImg} alt="" className='size-96 overflow-hidden ml-40'/>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className='text-xl font-bold text-left'>Drawing Pencil</h2>
                <p className='w-[33rem] text-justify'>Drawing pen adalah jenis pulpen yang digunakan untuk membuat garis utama pada sebuah gambar. Dengan karakteristik tintanya yang pekat, drawing pen mampu menghasilkan garis yang rapi dan konsisten. Dengan keunggulannya, drawing pen biasa digunakan oleh para insinyur, arsitek, sampai seniman komik. Ada berbagai merek drawing pen yang dapat Anda temukan, salah satunya seperti drawing pen merek pilot.</p>
                <h2 className='text-2xl font-bold text-left'>Rp. 8.000 - 15.000</h2>
                <p className="w-[33rem] text-sm text-justify">
                *Harga yang tertera adalah rentang harga dari  produk ini. Anda bisa mengetahui harga aslinya dengan datang ke toko ATK HK JAYA</p>
                <div className="mt-1 flex justify-between text-primary-blue hover:font-bold hover:cursor-pointer items-center">
                    <span>Spesifikasi Produk</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div className='border-b-96 border border-primary-blue rounded-full'></div>
                <div className="mt-1 flex justify-between text-primary-blue hover:font-bold hover:cursor-pointer items-center">
                    <span>Maps ke Toko ATK HK Jaya </span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div className='border-b-96 border border-primary-blue rounded-full'></div>
            </div>
        </div>
      </div>  
      {/* end content detail */}

      {/* produk spesification */}
      <div className="ml-40 my-20 mr-28 flex flex-col gap-3">
        <h1 className='text-xl text-primary-blue font-bold text-left'>Spesifikasi Produk</h1>
        <div>
          <div className="flex justify-between py-2">
            <p className='font-bold text-sm'>MERK:</p>
            <p className='text-sm'>Joyko, Fabercastel</p>
          </div>
          <div className='border-b-80 border border-slate-300 rounded-full mb-2'></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className='font-bold text-sm'>Harga:</p>
            <p className='text-sm'>Joyko, Fabercastel</p>
          </div>
          <div className='border-b-80 border border-slate-300 rounded-full mb-2'></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className='font-bold text-sm'>Warna:</p>
            <p className='text-sm'>Joyko, Fabercastel</p>
          </div>
          <div className='border-b-80 border border-slate-300 rounded-full mb-2'></div>
        </div>
        <div>
          <div className="flex justify-between py-2">
            <p className='font-bold text-sm'>Ukuran:</p>
            <p className='text-sm'>Joyko, Fabercastel</p>
          </div>
          <div className='border-b-80 border border-slate-300 rounded-full mb-2'></div>
        </div>
      </div>
      {/* end produk spesification */}

      <Footer />
    </div>
  )
}

export default DetailProduk
