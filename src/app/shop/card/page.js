'use client';
import { useMainContext } from '@/contexts/MainProvider';
import Link from 'next/link';
import TableProducts from '@/components/card/TableProducts';
import TableTotal from '@/components/card/TableTotal';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';
import React from 'react';

export default function page() {
  const { card } = useMainContext();

  return (
    <>
      <PuplicLandingPage title='السلة' desc='طازجة وعضوية' />
      {card.length === 0 ? (
        <section className='flex flex-col gap-3 justify-center items-center p-4'>
          <h2 className='head'>لا شئ في السلة</h2>
          <Link href='/shop' className='btn btn-full'>
            الرجوع الي المتجر
          </Link>
        </section>
      ) : (
        <section className='container '>
          <div className='grid sm:grid-cols-3 gap-3 auto-rows-max'>
            <div className='col-span-2 '>
              <TableProducts />
            </div>
            <div className='w-full'>
              <TableTotal />
              <div className='flex justify-start items-start flex-wrap sm:flex-row gap-3 mt-3'>
                <button
                  type='button'
                  className='btn btn-full py-2 min-w-[100px]'
                >
                  إتمام الشراء
                </button>
                <button
                  type='button'
                  className='btn btn-full py-2 min-w-[100px]'
                >
                  تحديث
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
