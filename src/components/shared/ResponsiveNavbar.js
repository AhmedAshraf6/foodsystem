'use client';
import { useMainContext } from '@/contexts/MainProvider';
import { navLiks } from '@/utils/Constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function ResponsiveNavbar() {
  const { navbar, detectNavbar } = useMainContext();
  const [activeNav, setActiveNav] = useState('1');

  return (
    <>
      {navbar && (
        <aside className='fixed w-[70%] h-[100%] bg-secondary top-0 right-0 z-10	'>
          <div className='flex justify-end'>
            <AiOutlineClose
              className='text-2xl  cursor-pointer text-white m-3 hover:text-primary'
              onClick={() => detectNavbar(false)}
            />
          </div>
          <ul className='flex flex-col gap-y-5 px-3 text-white'>
            {navLiks &&
              navLiks.map((nav) => (
                <Link
                  className={`font-bold cursor-pointer hover:text-primary transition duration-200 ${
                    activeNav == nav.id && 'text-primary'
                  }`}
                  key={nav.id}
                  onClick={() => setActiveNav(nav.id)}
                  href={nav.link}
                  aria-label='title'
                >
                  {nav.title}
                </Link>
              ))}
          </ul>
        </aside>
      )}
    </>
  );
}
