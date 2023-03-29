'use client';
import { useMainContext } from '@/contexts/MainProvider';

export default function TableTotal() {
  const { total } = useMainContext();
  return (
    <table class='border-collapse border border-slate-400  w-full table-fixed  '>
      <thead>
        <tr>
          <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg '>
            صورة المنتج
          </th>
          <th class='border  border-b-gray-700 border-gray-300 p-2 text-black font-bold text-xs sm:text-lg'>
            الاسم
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='border border-slate-300 p-1 sm:p-2 text-center text-black font-bold sm:text-start'>
            الشحن
          </td>
          <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start'>
            مجاني{' '}
          </td>
        </tr>
        <tr>
          <td className='border border-slate-300 p-1 sm:p-2 text-center text-black font-bold sm:text-start'>
            الكل
          </td>
          <td className='border border-slate-300 p-1 sm:p-2 text-center sm:text-start'>
            {total} جنيه
          </td>
        </tr>
      </tbody>
    </table>
  );
}
