import Image from 'next/image';
import React from 'react';

export default function SpecialProduct() {
  return (
    <section className='bg-gray-100 px-3 sm:px-12 py-3 sm:py-12'>
      <div className='max-w-6xl mx-auto grid sm:grid-cols-2 gap-5'>
        <div className='w-full'>
          <Image
            src='/a.jpg'
            alt='a'
            width={300}
            height={300}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
        <div className='flex flex-col gap-y-2 sm:gap-y-3'>
          <h2 className='text-4xl text-primary font-bold '>
            صفقة<span className='text-black mx-2'>الشهر</span>
          </h2>
          <span className='font-light text-xl'>هيكان الفراولة</span>
          <p className='text-gray-500'>
            أي شخص أقل أهمية في رفضنا ، وغالبًا ما يكون الأصغر ، يهرب من أي شيء
            كهذا! طوبى لمن يتسببون بأقل قدر من المتاعب. إنهم يتهمون باللذة عندما
            يرون من أين كل هذا الخطأ المولود
          </p>
          <div className='flex sm:flex-row flex-wrap gap-3 mb-3'>
            <div className='flex flex-col justify-center items-center border-2 border-primary p-5'>
              <span className='text-2xl text-primary font-bold '>00</span>
              <span className='text-xl'>أيام</span>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-primary p-5'>
              <span className='text-2xl text-primary font-bold '>00</span>
              <span className='text-xl'>أيام</span>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-primary p-5'>
              <span className='text-2xl text-primary font-bold '>00</span>
              <span className='text-xl'>أيام</span>
            </div>
            <div className='flex flex-col justify-center items-center border-2 border-primary p-5'>
              <span className='text-2xl text-primary font-bold '>00</span>
              <span className='text-xl'>أيام</span>
            </div>
          </div>
          <div className='flex justify-start'>
            <button className='btn btn-full ' role='button'>
              اضافة إلي السلة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
