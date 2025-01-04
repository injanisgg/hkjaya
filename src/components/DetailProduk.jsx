import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DetailImg from '../img/detail.jpg'

function DetailProduk() {
  return (
    <div>
      <Navbar />
      <button className='w-max py-3 px-4 rounded-full bg-white hover:border-2 border-primary-blue fixed left-8 z-10'><i className="fa-solid fa-arrow-left"></i></button>
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
                    <span>Detail Product</span>
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
      {/* <Footer /> */}
    </div>
  )
}

export default DetailProduk
