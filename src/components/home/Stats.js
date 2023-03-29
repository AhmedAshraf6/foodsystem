import { statsItems } from '@/utils/Constants';
import React from 'react';

export default function Stats() {
  return (
    <div className='bg-gray-50 py-3 sm:py-10 px-3 sm:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-y-4 flex-wrap'>
      {statsItems &&
        statsItems.length > 0 &&
        statsItems.map((item) => {
          const { id, title, desc, Icon } = item;
          return (
            <div
              className='flex items-center gap-x-4 max-w-6xl mx-auto '
              key={id}
            >
              <div className='p-3 rounded-full flex justify-center items-center border-2 border-primary '>
                <Icon className='text-primary text-4xl' />
              </div>
              <div>
                <h3 className='font-semibold text-2xl mb-3'>{title}</h3>
                <p className='text-gray-500'>{desc}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
