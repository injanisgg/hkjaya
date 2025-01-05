import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import MainHeader from '../img/home/header-main.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Slogan1 from '../img/home/slogan1.png'
import Slogan2 from '../img/home/slogan2.png'
import Slogan3 from '../img/home/slogan3.png'
import AlatSeni from '../img/home/alat-seni.jpg'
import ATK from '../img/home/atk.jpg'
import Kertas from '../img/home/kertas.jpg'
import Peralatan from '../img/home/peralatan.jpeg'
import Footer from '../components/Footer'


function Beranda() {
  return (
    <div>
      <Navbar/>
      <HeaderPicture 
      picture={MainHeader} 
      alt={'Main Header Picture'}
      textTop={'Swalayan Alat Tulis'}
      textBottom={'Semua Ada Semua Murah'}
      CustomButton={() => <ButtonBorder btnText={'Kunjungi Sekarang'} linkTo={'https://maps.app.goo.gl/UyTpzhtbTNxCySai8'}/>}
      />
      {/* slogan content */}
      <div className='py-5 bg-slate-50'>
        <div className="flex flex-col gap-5 text-center">
            <h1 className='text-2xl font-bold'>ATK HK JAYA</h1>
            <p className='tex-lg'>Menyediakan Alat Tulis Kantor Semua Ada Semua Murah</p>
        </div>
        <div className='flex justify-around my-5'>
            <div className="flex flex-col gap-2 items-center">
                <img src={Slogan1} alt="Gambar slogan 1" className='w-48'/>
                <p className='font-bold text-lg text-center'>Paling Murah</p>
                <div className="text-center">
                    <p>
                        Dijamin harga murah ramah untuk <br/>
                        pelajar, mahasiswa, dan semua orang
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center pt-5">
                <img src={Slogan2} alt="Gambar slogan 1" className='w-48'/>
                <p className='font-bold text-lg text-center'>Paling Lengkap</p>
                <div className="text-center">
                    <p>
                        Semua ada di ATK HK JAYA dari mulai alat <br/>
                        tulis kantor, buku, hingga peralatan rumah tangga
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <img src={Slogan3} alt="Gambar slogan 1" className='w-48'/>
                <p className='font-bold text-lg text-center'>Garansi Kualitas</p>
                <div className="text-center">
                    <p>
                        Produk ATK HK JAYA dipastikan <br/>
                        memiliki kualitas yang bagus
                    </p>
                </div>
            </div>
        </div>
      </div>
      {/* end slogan content */}
      {/* category content */}
        <div className='py-5'>
            <div className="flex flex-col gap-5 text-center">
                <h1 className='text-2xl font-bold'>CARI BERDASARKAN KATEGORI</h1>
                <p className='tex-lg'>Pilih kategori yang ingin kamu lihat!</p>
            </div>
            <div className='flex justify-around my-5'>
                <div className="flex flex-col hover:cursor-pointer gap-2 items-center">
                    <img src={AlatSeni} alt="Gambar slogan 1" className='w-48 rounded-xl'/>
                    <p className='font-bold text-lg text-center pt-2'>Alat-Alat Seni</p>
                </div>
                <div className="flex flex-col hover:cursor-pointer gap-2 items-center">
                    <img src={ATK} alt="Gambar slogan 1" className='w-48 rounded-xl'/>
                    <p className='font-bold text-lg text-center pt-2'>Alat Tulis Kantor</p>
                </div>
                <div className="flex flex-col hover:cursor-pointer gap-2 items-center">
                    <img src={Kertas} alt="Gambar slogan 1" className='w-48 rounded-xl'/>
                    <p className='font-bold text-lg text-center pt-2'>Kertas</p>
                </div>
                <div className="flex flex-col hover:cursor-pointer gap-2 items-center">
                    <img src={Peralatan} alt="Gambar slogan 1" className='w-48 rounded-xl'/>
                    <p className='font-bold text-lg text-center pt-2'>Peralatan</p>
                </div>
            </div>
        </div>
      {/* end category content */}
      {/* footer */}
      <Footer />
      {/* end footer */}
    </div>
  )
}

export default Beranda
