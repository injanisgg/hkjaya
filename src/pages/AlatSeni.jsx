import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeaderPicture from "../components/HeaderPicture";
import HeaderArt from "../img/art/header-alat-seni.jpg";
import ButtonBorder from "../components/ButtonBorder";
import Footer from "../components/Footer";
import Produk from "../components/Produk";

function AlatSeni() {
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
        picture={HeaderArt}
        alt={"Header"}
        textTop={"Menyediakan Alat-Alat"}
        textBottom={"Seni Lengkap"}
        CustomButton={() => (
          <ButtonBorder btnText={"Lihat Alat Seni"} event={scrollDown}/>
        )}
      />
      <Produk headTitle={"Alat-Alat Seni"} categoryName={"Alat seni"} />
      <Footer />
    </div>
  );
}

export default AlatSeni;
