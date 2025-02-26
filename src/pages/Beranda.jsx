import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();

    // handle redirect
    const redirectToAlatSeni = () => {
    navigate('/alatSeni')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const redirectToATK = () => {
    navigate('/atk')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const redirectToKertas = () => {
    navigate('/kertas')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const redirectToPeralatan = () => {
    navigate('/peralatan')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Tampilkan setelah halaman dimuat
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className='pb-12 lg:pb-0'>
        <div className={`transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar/>
        <HeaderPicture 
        picture={MainHeader} 
        alt={'Main Header Picture'}
        textTop={'Swalayan Alat Tulis'}
        textBottom={'Semua Ada Semua Murah'}
        CustomButton={() => <ButtonBorder btnText={'Kunjungi Sekarang'} linkTo={'https://maps.app.goo.gl/UyTpzhtbTNxCySai8'}/>}
        />
        {/* slogan content */}
        <div className='p-5 bg-slate-50'>
            <div className="flex flex-col gap-3 text-center">
                <h1 className='text-2xl font-bold'>ATK HK JAYA</h1>
                <p className='text-xl'>Menyediakan Alat Tulis Kantor, Semua Ada Semua Murah</p>
            </div>
            <div className='flex flex-col lg:flex justify-around items-center my-5 gap-3'>
                <div className="flex flex-col gap-2 items-center">
                    <img src={Slogan1} alt="Gambar slogan 1" className='w-20 xl:w-48'/>
                    <p className='font-bold text-lg text-center'>Paling Murah</p>
                    <div className="text-center">
                        <p className='text-base'>
                            Dijamin harga murah dan ramah untuk <br/>
                            pelajar, mahasiswa, dan semua orang
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center pt-5">
                    <img src={Slogan2} alt="Gambar slogan 1" className='w-20 xl:w-48'/>
                    <p className='font-bold text-lg text-center'>Paling Lengkap</p>
                    <div className="text-center">
                        <p className='text-base'>
                            Semua ada di ATK HK JAYA mulai dari alat <br/>
                            tulis kantor, buku, hingga peralatan rumah tangga
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <img src={Slogan3} alt="Gambar slogan 1" className='w-20 xl:w-48'/>
                    <p className='font-bold text-lg text-center'>Garansi Kualitas</p>
                    <div className="text-center">
                        <p className='text-base'>
                            Produk ATK HK JAYA dipastikan <br/>
                            memiliki kualitas yang bagus
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* end slogan content */}

        {/* category content */}
            <div className='p-5'>
                <div className="flex flex-col gap-3 text-center">
                    <h1 className='text-2xl font-bold'>CARI BERDASARKAN KATEGORI</h1>
                    <p className='text-xl'>Pilih kategori yang ingin kamu lihat!</p>
                </div>
                <div className='flex flex-wrap gap-3 items-center justify-evenly my-5'>
                    <div className="flex flex-col p-2 hover:cursor-pointer gap-2 items-center" onClick={redirectToAlatSeni}>
                        <img src={AlatSeni} alt="Gambar slogan 1" className='w-28 xl:w-48 rounded-xl'/>
                        <p className='font-bold text-lg text-center pt-2'>Alat Seni</p>
                    </div>
                    <div className="flex flex-col p-2 hover:cursor-pointer gap-2 items-center" onClick={redirectToATK}>
                        <img src={ATK} alt="Gambar slogan 1" className='w-28 xl:w-48 rounded-xl'/>
                        <p className='font-bold text-lg text-center pt-2'>ATK</p>
                    </div>
                    <div className="flex flex-col p-2 hover:cursor-pointer gap-2 items-center" onClick={redirectToKertas}>
                        <img src={Kertas} alt="Gambar slogan 1" className='w-28 xl:w-48 rounded-xl'/>
                        <p className='font-bold text-lg text-center pt-2'>Kertas</p>
                    </div>
                    <div className="flex flex-col p-2 hover:cursor-pointer gap-2 items-center" onClick={redirectToPeralatan}>
                        <img src={Peralatan} alt="Gambar slogan 1" className='w-28 xl:w-48 rounded-xl'/>
                        <p className='font-bold text-lg text-center pt-2'>Peralatan</p>
                    </div>
                </div>
            </div>
        {/* end category content */}

        {/* footer */}
        <Footer />
        {/* end footer */}
        </div>
    </div>
  )
}

export default Beranda
