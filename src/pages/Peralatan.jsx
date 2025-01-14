import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderPeralatan from '../img/peralatan/header-peralatan.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'
import Produk from '../components/Produk'

function Peralatan() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Tampilkan setelah halaman dimuat
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <HeaderPicture 
      picture={HeaderPeralatan}
      alt={'Header Peralatan'}
      textTop={'Peralatan Sekolah, Kantor'}
      textBottom={'Hingga Rumah Tersedia'}
      CustomButton={() => <ButtonBorder btnText={'Lihat Peralatan'} linkTo={''}/>}/>
      <Produk headTitle={'Peralatan'} categoryName={'Peralatan'}/>
      <Footer/>
    </div>
  )
}

export default Peralatan
