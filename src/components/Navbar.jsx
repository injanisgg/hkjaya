import React from 'react'
import { NavLink } from 'react-router-dom';
import NavLogo from '../img/logo-navbar.png';
import Search from './Search';
import Shopee from '../img/icons-shopee.png';

function Navbar() {
  return (
    <div className='px-4'>
      <div className="fixed top-0 left-0 right-0 z-20">
        <div className="py-2 bg-white shadow-below">
            <nav className='flex items-center justify-around'>
                <div><img src={NavLogo} alt="Logo ATK HK Jaya" className='w-16'/></div>
                <NavLink to='/' className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Beranda</NavLink>
                <NavLink to='/alatSeni' className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Alat Seni</NavLink>
                <NavLink to='/atk' className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Alat Tulis Kantor</NavLink>
                <NavLink to='/kertas' className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Kertas</NavLink>
                <NavLink to='/peralatan' className={({ isActive }) => isActive? 'hover: underline active font-bold': 'hover:underline'}>Peralatan</NavLink>
                <Search/>
                <NavLink to='https://shopee.co.id/elsaatk'><img width="25" height="25" src={Shopee} alt="shopee"/></NavLink>
                <NavLink to='https://maps.app.goo.gl/UyTpzhtbTNxCySai8'><i className="fa-solid fa-map-location-dot fa-xl text-primary-blue"></i></NavLink>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
