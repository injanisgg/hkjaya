import React from 'react'
import AlatSeni from '../img/home/alat-seni.jpg'
import Filters from './Filters'

function Produk({title, arrayProduk}) {
  return (
    <div className='mb-20'>
        {/* title */}
        <h1 className='text-2xl font-bold text-center py-5'>{title}</h1>
        {/* end title */}

        <div className="flex gap-5 mx-20">
          {/* filter */}
          <div className="flex flex-col gap-5">
            <Filters title={'Kategori'}/>
            <Filters title={'Merk'}/>
          </div>
          {/* end filter */}

          {/* list produk */}
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <div className="relative">
                  <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 xl:h-52 rounded-xl object-cover'/>
                </div>
                <p className='font-bold text-lg'>Kanvas</p>
                <div className="flex gap-2">
                  <p className='text-xs text-white px-2 py-1 rounded-full w-max bg-red-600'>Buku</p>
                  <p className='text-xs text-white px-2 py-1 rounded-full w-max bg-red-600'>Joyko</p>
                </div>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
          </div>
          {/* end list produk */}
        </div>
    </div>
  )
}

export default Produk
