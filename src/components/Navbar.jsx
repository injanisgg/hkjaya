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
        <div className="py-2 bg-white shadow-below">
            <nav className='flex items-center justify-around'>
                <div><img src={NavLogo} alt="Logo ATK HK Jaya" className='w-16'/></div>
                <NavLink 
                    to='/' 
                    onClick={() => handleNavigation('/')}
                    className={({ isActive }) => isActive ? 'hover:underline active font-bold' : 'hover:underline transition-all duration-300 ease-in-out'}
                >
                    Beranda
                </NavLink>
                <NavLink 
                    to='/alatSeni' 
                    onClick={() => handleNavigation('/alatSeni')}
                    className={({ isActive }) => isActive ? 'hover:underline active font-bold' : 'hover:underline transition-all duration-300 ease-in-out'}
                >
                    Alat Seni
                </NavLink>
                <NavLink 
                    to='/atk' 
                    onClick={() => handleNavigation('/atk')}
                    className={({ isActive }) => isActive ? 'hover:underline active font-bold' : 'hover:underline transition-all duration-300 ease-in-out'}
                >
                    Alat Tulis Kantor
                </NavLink>
                <NavLink 
                    to='/kertas' 
                    onClick={() => handleNavigation('/kertas')}
                    className={({ isActive }) => isActive ? 'hover:underline active font-bold' : 'hover:underline transition-all duration-300 ease-in-out'}
                >
                    Kertas
                </NavLink>
                <NavLink 
                    to='/peralatan' 
                    onClick={() => handleNavigation('/peralatan')}
                    className={({ isActive }) => isActive ? 'hover:underline active font-bold' : 'hover:underline transition-all duration-300 ease-in-out'}
                >
                    Peralatan
                </NavLink>
                <Search/>
                <NavLink to='https://maps.app.goo.gl/UyTpzhtbTNxCySai8'>
                    <i className="fa-solid fa-map-location-dot fa-xl text-primary-blue"></i>
                </NavLink>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
