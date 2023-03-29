import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className='bg-secondary text-gray-300  bottom-0'>
      <div className='container'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 py-6 sm:py-10'>
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-2xl text-white relative '>
              معلومات عنا
            </h3>
            <span className='border-t-4 border-primary w-[10%] my-3'></span>
            <p className='text-gray-400 text-base'>
              لكي ترى على الأقل من أين كل هذا الخطأ المولود ، من أولئك الذين
              يتهمون اللذة والحمد بالألم ، سأفتح الأمر برمته ، وتلك الأشياء
              نفسها.
            </p>
          </div>
          <div className='flex flex-col '>
            <h3 className='text-lg sm:text-2xl text-white relative '>
              ابقي علي تواصل
            </h3>
            <span className='border-t-4 border-primary w-[10%] my-3'></span>
            <address className='text-gray-400 text-base flex flex-col gap-2 sm:gap-3'>
              <span>الجيزة القاهرة</span>
              <span>supp@s.com</span>
              <span>20+ 1212321</span>
            </address>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-2xl text-white relative '>
              الصفحات
            </h3>
            <span className='border-t-4 border-primary w-[10%] my-3'></span>
            <div className='text-gray-400 text-base flex flex-col gap-2 sm:gap-3'>
              <Link href='/' className='flex items-center gap-x-1'>
                <IoMdArrowDropleft className='text-primary' />
                <span className='font-bold'>الرئيسية</span>
              </Link>
              <Link href='/about' className='flex items-center gap-x-1'>
                <IoMdArrowDropleft className='text-primary' />
                <span className='font-bold'>من نحن</span>
              </Link>
              <Link href='/shop' className='flex items-center gap-x-1'>
                <IoMdArrowDropleft className='text-primary' />
                <span className='font-bold'>المتجر</span>
              </Link>
              <Link href='/contact' className='flex items-center gap-x-1'>
                <IoMdArrowDropleft className='text-primary' />
                <span className='font-bold'>تواصل معنا</span>
              </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='text-lg sm:text-2xl text-white relative '>اشترك</h3>
            <span className='border-t-4 border-primary w-[10%] my-3'></span>
            <p className='text-gray-400 text-base'>
              اشترك في قائمتنا البريدية للحصول على آخر التحديثات.
            </p>
            <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 mt-4'>
              <input
                type='email'
                className='bg-[#012738] outline-none p-4 rounded-lg placeholder:text-gray-300 '
                placeholder='البريد الإلكتروني'
              />
              <button
                type='button'
                className='rounded-lg flex justify-center items-center p-4 bg-[#012738] text-primary hover:bg-primary hover:text-[#012738] transition-all duration-400 '
              >
                <FaTelegramPlane className='text-xl ' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className='text-gray-400 w-full h-[2px]' />
      <div className='container'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-y-2'>
          <h2 className='text-base sm:text-lg'>
            تصميم وبرمجة بواسطة <span className='text-primary'>أحمد أشرف </span>
            <br className='hidden sm:block' />
            جميع الحقوق محفوظة
          </h2>
          <div className='flex gap-x-1'>
            <AiFillGithub className='text-gray-400 text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
            <AiFillLinkedin className='text-gray-400 text-2xl cursor-pointer hover:text-primary transition-colors duration-200' />
          </div>
        </div>
      </div>
    </footer>
  );
}
