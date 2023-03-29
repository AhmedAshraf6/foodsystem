import React from 'react';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <div className='min-h-screen bg-[url("/hero-bg.jpg")] bg-cover bg-center-center relative'>
      <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[#07212e] opacity-60'></div>
      {/* absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] */}
      <div className='relative flex flex-col justify-center items-center min-h-screen px-4'>
        <h4 className='text-primary text-lg sm:text-3xl mb-3 sm:mb-6 font-semibold'>
          طازج وعضوي
        </h4>
        <h1 className='text-3xl sm:text-7xl text-white font-bold mb-5 sm:mb-10 text-center'>
          فواكه موسمية لذيذة
        </h1>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link
            className='bg-primary text-white  hover:bg-secondary hover:text-primary transition-colors duration-300 rounded-3xl min-w-[140px] py-3 text-center'
            href='/shop'
          >
            المتجر
          </Link>
          <Link
            className='bg-transparent text-white border-2 border-primary hover:bg-primary  transition-colors duration-300 rounded-3xl min-w-[140px] py-3 text-center'
            href='/contact'
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}
