import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderAtk from '../img/atk/header-atk.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'
import Produk from '../components/Produk'

function Atk() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Tampilkan setelah halaman dimuat
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar/>
      <HeaderPicture 
      picture={HeaderAtk}
      alt={'Header ATK'}
      textTop={'Alat Tulis Kantor'}
      textBottom={'Apapun Tersedia Lengkap'}
      CustomButton={() => <ButtonBorder btnText={'Lihat Alat Tulis Kantor'} linkTo={''}/>}/>
      <Produk headTitle={'Alat Tulis Kantor'} categoryName={'ATK'}/>
      <Footer/>
    </div>
  )
}

export default Atk
