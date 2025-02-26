import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import NavLogo from '../img/logo-navbar.png';
import Search from './Search';


function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fungsi untuk menangani navigasi dengan delay
  const handleNavigation = (to) => {
    setIsLoading(true); // Mulai loading (untuk efek transisi)
    setTimeout(() => {
      navigate(to); // Setelah delay, navigasi ke halaman
    }, 500); // Delay 500ms sebelum navigasi
  };

  return (
    <div className='px-4'>
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="flex items-center justify-around sm:flex-wrap py-2 bg-white shadow-below">
            <img src={NavLogo} alt="Logo ATK HK Jaya" className='xl:w-16 sm:w-10'/>
            <nav className='flex items-center xl:gap-10 sm:gap-5'>
                <NavLink 
                    to='/' 
                    onClick={() => handleNavigation('/')}
                    className={({ isActive }) => isActive ? 'sm:text-xs xl:text-base hover:underline active font-bold' : 'sm:text-xs xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                >
                    Beranda
                </NavLink>
                <NavLink 
                    to='/alatSeni' 
                    onClick={() => handleNavigation('/alatSeni')}
                    className={({ isActive }) => isActive ? 'sm:text-xs xl:text-base hover:underline active font-bold' : 'sm:text-xs xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                >
                    Alat Seni
                </NavLink>
                <NavLink 
                    to='/atk' 
                    onClick={() => handleNavigation('/atk')}
                    className={({ isActive }) => isActive ? 'sm:text-xs xl:text-base hover:underline active font-bold' : 'sm:text-xs xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                >
                    Alat Tulis Kantor
                </NavLink>
                <NavLink 
                    to='/kertas' 
                    onClick={() => handleNavigation('/kertas')}
                    className={({ isActive }) => isActive ? 'sm:text-xs xl:text-base hover:underline active font-bold' : 'sm:text-xs xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                >
                    Kertas
                </NavLink>
                <NavLink 
                    to='/peralatan' 
                    onClick={() => handleNavigation('/peralatan')}
                    className={({ isActive }) => isActive ? 'sm:text-xs xl:text-base hover:underline active font-bold' : 'sm:text-xs xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                >
                    Peralatan
                </NavLink>
                
            </nav>
            <Search/>
            <NavLink to='https://maps.app.goo.gl/UyTpzhtbTNxCySai8' target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-map-location-dot fa-lg text-primary-blue"></i>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
