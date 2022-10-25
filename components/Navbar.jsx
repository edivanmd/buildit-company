import {RiCloseCircleFill, RiMenu3Fill} from 'react-icons/ri';
import React, { useEffect, useState } from 'react'
import logo from '../public/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

  const navLinks = [
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'Projects', path: '/projects'},
    {name: 'Contact', path: '/contact'}
  ]
  
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');

  const handleNavbar = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 10) {
        setColor('#FFFFFF');
      } else {
        setColor('transparent');
      }
    }
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <nav style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/' >
          <h1 className='cursor-pointer'>
            <div className='flex gap-3 justify-between items-center'>
              <div className='w-12 h-12 bg-green-2 rounded-full' />
              <p className='text-green-2 text-3xl'>buildit</p>
            </div>
          </h1>
          </Link>
          <div>
            <ul className='hidden sm:flex text-base'>
              {navLinks.map((link, index) => (
                <li key={index} className='p-4 text-green-1 hover:text-black ease-in duration-300'>
                  <Link href={link.path}><a>{link.name}</a></Link>
                </li>
              ))}
            </ul>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNavbar} className='block sm:hidden z-10'>
          {nav ? <RiCloseCircleFill size={20} /> : <RiMenu3Fill size={20} />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav
            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        }>
          <ul>
            {navLinks.map((link, index) => (
              <li onClick={handleNavbar} key={index} className='p-4 hover:text-gray-500 text-4xl'>
                <Link href={link.path}><a>{link.name}</a></Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar