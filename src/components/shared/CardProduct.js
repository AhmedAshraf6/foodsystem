import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonAddToCard from './ButtonAddToCard';

export default function CardProduct({ id, name, price, images }) {
  return (
    <div className='cursor-pointer py-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-gray-200 transition-shadow duration-200 group flex flex-col justify-center items-center'>
      <Link href={`/shop/${id}`}>
        <Image
          src={images[0]}
          width={300}
          height={300}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className='sm:rounded-t-lg group-hover:opacity-80 transition duration-200 object-contain'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          alt='image not avalible'
        ></Image>
        <div className='p-2 flex flex-col gap-y-2'>
          <h3 className='text-lg font-semibold'>{name}</h3>
          <span className='text-gray-400'>لكل كجم</span>
          <h3 className='font-bold text-2xl'>{price}</h3>
        </div>
      </Link>
      <ButtonAddToCard id={id} />
    </div>
  );
}
