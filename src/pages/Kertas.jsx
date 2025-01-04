import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderKertas from '../img/kertas/header-kertas.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'

function Kertas() {
  return (
    <div>
      <Navbar />
      <HeaderPicture 
      picture={HeaderKertas}
      alt={'Header Kertas'}
      textTop={'Berbagai Macam Kertas'}
      textBottom={'Dengan Berbagai Macam Ukuran'}
      CustomButton={() => <ButtonBorder btnText={'Lihat Kertas'} linkTo={''}/>}/>
      <Footer/>
    </div>
  )
}

export default Kertas
