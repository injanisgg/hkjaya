import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderPeralatan from '../img/peralatan/header-peralatan.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'
import Produk from '../components/Produk'

function Peralatan() {
  return (
    <div>
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
