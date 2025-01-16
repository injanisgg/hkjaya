import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderKertas from '../img/kertas/header-kertas.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'
import Produk from '../components/Produk'

function Kertas() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Tampilkan setelah halaman dimuat
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // scroll down to item
  const scrollDown = () => {
    window.scrollTo({top: 320, behavior:"smooth"})
  }

  return (
    <div className={`transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <HeaderPicture 
      picture={HeaderKertas}
      alt={'Header Kertas'}
      textTop={'Berbagai Macam Kertas'}
      textBottom={'Dengan Berbagai Macam Ukuran'}
      CustomButton={() => <ButtonBorder btnText={'Lihat Kertas'} event={scrollDown}/>}/>
      <Produk headTitle={'Kertas'} categoryName={'Kertas'}/>
      <Footer/>
    </div>
  )
}

export default Kertas
