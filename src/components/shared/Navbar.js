'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenuLeft } from 'react-icons/cg';
import { useMainContext } from '@/contexts/MainProvider';
import { navLiks } from '@/utils/Constants';
import Link from 'next/link';
export default function Navbar() {
  const { detectNavbar, navbar, amount } = useMainContext();
  const [navColor, setNavColor] = useState('transparent');
  const [activeNav, setActiveNav] = useState('1');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor('secondary') : setNavColor('transparent');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <nav
      className={`w-full mx-auto px-5 sm:px-10 py-3 fixed top-0 z-10 text-white bg-${navColor}  transition-colors duration-1000`}
    >
      <div className='flex justify-between  items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={150}
            height={150}
            alt='logo image'
            className='cursor-pointer'
          ></Image>
        </Link>
        <ul className='hidden md:flex items-center justify-center gap-x-10 '>
          {navLiks &&
            navLiks.map((nav) => (
              <Link
                className={`font-bold cursor-pointer hover:text-primary transition duration-200 ${
                  activeNav == nav.id && 'text-primary'
                }`}
                key={nav.id}
                onClick={() => setActiveNav(nav.id)}
                href={nav.link}
              >
                {nav.title}
              </Link>
            ))}
        </ul>
        <Link className='relative  flex gap-3 cursor-pointer' href='/shop/card'>
          <FiShoppingCart className='text-2xl' />
          {amount > 0 && (
            <span className='absolute top-[-14px] right-[-10px] min-w-[25px] min-h-[25px]  bg-primary rounded-full text-white font-bold flex items-center justify-center px-1'>
              {amount}
            </span>
          )}
          <div className='inline md:hidden cursor-pointer'>
            <CgMenuLeft
              className='text-2xl'
              onClick={() => detectNavbar(true)}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
