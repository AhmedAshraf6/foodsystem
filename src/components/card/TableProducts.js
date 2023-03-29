'use client';
import { useMainContext } from '@/contexts/MainProvider';
import Image from 'next/image';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export default function TableProducts() {
  const { card, updateCard } = useMainContext();
  const { removeProduct } = useMainContext();
  return (
    <>
      {card && card.length > 0 && (
        <table class='border-collapse border border-slate-400  w-full table-fixed  '>
          <thead>
            <tr>
              <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg '>
                صورة المنتج
              </th>
              <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg'>
                الاسم
              </th>
              <th class='border  b order-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg'>
                السعر
              </th>
              <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg'>
                الكمية
              </th>
              <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg'>
                إجمالي
              </th>
            </tr>
          </thead>
          <tbody>
            {card.map((product) => {
              const { id, price, images, amount, name } = product;
              return (
                <tr>
                  <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start flex flex-col sm:flex-row items-center gap-2 sm:gap-2'>
                    <AiOutlineClose
                      className='text-gray-600 cursor-pointer text-xl'
                      onClick={() => removeProduct(id)}
                    />
                    <Image
                      src={images[0]}
                      width={50}
                      height={50}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                      placeholder='blur'
                      blurDataURL='/spinner.svg'
                      alt='image not avalible'
                    ></Image>
                  </td>
                  <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start'>
                    {name}
                  </td>
                  <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start'>
                    {price}
                  </td>
                  <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start col-span-2'>
                    <input
                      type='number'
                      className='input p-1 w-full'
                      min='1'
                      value={amount}
                      onChange={(e) => updateCard(id, e.target.value)}
                    />
                  </td>
                  <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start font-bold'>
                    {amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
