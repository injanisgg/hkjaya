import React from 'react'
import AlatSeni from '../img/home/alat-seni.jpg'
import Filters from './Filters'

function Produk({title, arrayProduk}) {
  return (
    <div>
        {/* title */}
        <h1 className='text-2xl font-bold text-center py-5'>{title}</h1>
        {/* end title */}

        <div className="flex gap-5 mx-20">
          {/* filter */}
          <div className="flex flex-col gap-5">
            <Filters />
            <Filters />
          </div>
          {/* end filter */}

          {/* list produk */}
          <div className="grid grid-cols-4 gap-5">
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
                <p className='xl:w-52 text-sm'>Macam-macam akrilik, akrilik yang bermacam-macam, jenis jenis yang banyak.</p>
                <p className='font-bold text-lg'>Rp. 8k - 12k</p>
                <button className='rounded-xl bg-primary-blue text-sm text-white xl:w-52 py-2'>Lihat Produk</button>
            </div>
            <div className="flex flex-col hover:cursor-pointer gap-2 text-left">
                <img src={AlatSeni} alt="Gambar slogan 1" className='xl:w-52 rounded-xl'/>
                <p className='font-bold text-lg'>Kanvas</p>
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
