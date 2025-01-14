import React from 'react'
import LogoFooter from '../img/logo-footer.png'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate();

    // handle redirect
    const redirectToAlatSeni = () => {
        navigate('/alatSeni')
    }
    
    const redirectToATK = () => {
        navigate('/atk')
    }

    const redirectToKertas = () => {
        navigate('/kertas')
    }

    const redirectToPeralatan = () => {
        navigate('/peralatan')
    }

  return (
    <div className='flex flex-col'>
        <div className='w-full bg-slate-100 p-5'>
            <div className="flex justify-around items-center">
                <div className="flex flex-col">
                    <img src={LogoFooter} alt="HK Jaya logo" className='w-48'/>
                    <p className='font-bold text-lg text-left text-primary-blue pt-2'>Semua Ada Semua Murah</p>
                    <p className='text-left text-primary-blue'>Jl. Taman Siswa No.28, Sekaran, Kec. Gn. Pati, <br />
                    Kota Semarang, Jawa Tengah 50229</p>
                </div>
                <div className="flex flex-col text-primary-blue text-left gap-3">
                    <p className='font-bold text-lg'>Kontak Kami</p>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-whatsapp"></i>
                        <p>+62 823-2629-2964</p>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-instagram"></i>
                        <a href="https://instagram.com/hkjayastationery">@hkjayastationery</a>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-tiktok"></i>
                        <a href="https://instagram.com/hkjayastationery">@hk.jaya.stationery</a>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-solid fa-location-dot"></i>
                        <a href="https://maps.app.goo.gl/gJhUPzyjMPCPpVLYA">Lihat lokasi toko</a>
                    </div>
                </div>
                <div className="flex flex-col text-primary-blue text-left gap-3">
                    <p className='font-bold text-lg'>Kategori</p>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline' onClick={redirectToAlatSeni}>
                        <i class="fa-solid fa-palette"></i>
                        <p>Alat-alat seni</p>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline' onClick={redirectToATK}>
                        <i class="fa-solid fa-pen"></i>
                        <p>Alat tulis kantor</p>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline' onClick={redirectToKertas}>
                        <i class="fa-solid fa-note-sticky"></i>
                        <p>Kertas</p>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline' onClick={redirectToPeralatan}>
                        <i class="fa-solid fa-toolbox"></i>
                        <p>Peralatan</p>
                    </div>
                </div>
                <div className="flex flex-col text-primary-blue text-left gap-3">
                    <p className='font-bold text-lg'>Developer Info</p>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-linkedin"></i>
                        <a href='www.linkedin.com/in/suginiinjani'>suginiinjani</a>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-github-square"></i>
                        <a href='https://github.com/injanisgg'>injanisgg</a>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-brands fa-instagram"></i>
                        <a href='https://instagram.com/s.injzhani'>s.injzhani</a>
                    </div>
                    <div className='flex gap-2 items-center hover:cursor-pointer hover:underline'>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="">forggdev@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-16 bg-primary-blue flex justify-between px-20 py-8 text-white items-center'>
            <p>&#169; Copyright Sugini Injani 2025. All Right Reserved</p>
            <div className="flex items-center gap-4">
                <p>Kami menerima pembayaran dengan</p>
                <div className="flex flex-col text-center">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <p>Tunai</p>
                </div>
                <div className="flex flex-col text-center">
                    <i class="fa-solid fa-qrcode"></i>                  
                    <p>Qris</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
