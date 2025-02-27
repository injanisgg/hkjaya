import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import NavLogo from '../img/logo-navbar.png';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome as Home,
    faPalette as Art,
    faScroll as Paper,
    faPenRuler as ATK,
    faToolbox as Tools
} from '@fortawesome/free-solid-svg-icons';

function Navbar({ onFilterToggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Beranda', icon: Home, path: '/' },
    { id: 'art', label: 'Seni', icon: Art, path: '/alatseni' },
    { id: 'paper', label: 'Kertas', icon: Paper, path: '/kertas' },
    { id: 'atk', label: 'ATK', icon: ATK, path: '/atk' },
    { id: 'tools', label: 'Peralatan', icon: Tools, path: '/peralatan' }
  ]

  // Fungsi untuk menangani navigasi dengan delay
  const handleNavigation = (to) => {
    setIsLoading(true); // Mulai loading (untuk efek transisi)
    setTimeout(() => {
      navigate(to); // Setelah delay, navigasi ke halaman
    }, 500); // Delay 500ms sebelum navigasi
  };

  return (
    <div>
        {/* navbar lg dan xl */}
        <div className='px-4'>
            <div className="fixed top-0 left-0 right-0 z-20">
                <div className="flex items-center justify-around p-2 bg-white shadow-below">
                    <img src={NavLogo} alt="Logo ATK HK Jaya" className='w-12 xl:w-16 '/>
                    <nav className='hidden lg:flex items-center xl:gap-10'>
                        <NavLink 
                            to='/' 
                            onClick={() => handleNavigation('/')}
                            className={({ isActive }) => isActive ? ' xl:text-base hover:underline active font-bold' : 'xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                        >
                            Beranda
                        </NavLink>
                        <NavLink 
                            to='/alatSeni' 
                            onClick={() => handleNavigation('/alatSeni')}
                            className={({ isActive }) => isActive ? ' xl:text-base hover:underline active font-bold' : ' xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                        >
                            Alat Seni
                        </NavLink>
                        <NavLink 
                            to='/atk' 
                            onClick={() => handleNavigation('/atk')}
                            className={({ isActive }) => isActive ? ' xl:text-base hover:underline active font-bold' : ' xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                        >
                            Alat Tulis Kantor
                        </NavLink>
                        <NavLink 
                            to='/kertas' 
                            onClick={() => handleNavigation('/kertas')}
                            className={({ isActive }) => isActive ? ' xl:text-base hover:underline active font-bold' : ' xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                        >
                            Kertas
                        </NavLink>
                        <NavLink 
                            to='/peralatan' 
                            onClick={() => handleNavigation('/peralatan')}
                            className={({ isActive }) => isActive ? ' xl:text-base hover:underline active font-bold' : ' xl:text-base hover:underline transition-all duration-300 ease-in-out'}
                        >
                            Peralatan
                        </NavLink>
                        
                    </nav>
                    <Search/>
                    <NavLink to='https://maps.app.goo.gl/UyTpzhtbTNxCySai8' target="_blank" rel="noopener noreferrer" className={'flex flex-col items-center gap-3'}>
                        <i className="fa-solid fa-map-location-dot fa-lg text-primary-blue"></i>
                        <span className="text-xs">Maps</span>
                    </NavLink>
                    <button className={`lg:hidden ${location.pathname === '/' ? 'hidden' : ''} flex flex-col items-center`} onClick={onFilterToggle}>
                        <i className="fa-solid fa-filter"></i>
                        <span className='text-xs'>Filter</span>
                    </button>
                </div>
            </div>
        </div>

        {/* tab bar untuk sm dan md */}
        <div className='lg:hidden z-20 fixed bottom-0 left-0 right-0 w-full bg-white shadow-md border-t flex justify-around py-2'>
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    to={tab.path}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center text-gray-600
                    ${location.pathname === tab.path ? 'bg-blue-100 p-4 rounded-xl' : 'p-4'}`}
                >
                    <FontAwesomeIcon
                        icon={tab.icon}
                        className={`text-base transition-all duration-200 ${location.pathname === tab.path ? 'text-primary-blue' : 'text-gray-600'}`}
                    />
                    <span className='text-xs sm:text-sm text-primary-blue font-bold'>{tab.label}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar;
