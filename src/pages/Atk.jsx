import React from 'react'
import Navbar from '../components/Navbar'
import HeaderPicture from '../components/HeaderPicture'
import HeaderAtk from '../img/atk/header-atk.jpg'
import ButtonBorder from '../components/ButtonBorder'
import Footer from '../components/Footer'

function Atk() {
  return (
    <div>
      <Navbar/>
      <HeaderPicture 
      picture={HeaderAtk}
      alt={'Header ATK'}
      textTop={'Alat Tulis Kantor'}
      textBottom={'Apapun Tersedia Lengkap'}
      CustomButton={() => <ButtonBorder btnText={'Lihat Alat Tulis Kantor'} linkTo={''}/>}/>
      <Footer/>
    </div>
  )
}

export default Atk
