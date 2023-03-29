import React from 'react';

export default function PuplicLandingPage({ title, desc }) {
  return (
    <div
      className=' bg-[#31444e] relative'
      style={{
        minHeight: '60vh',
      }}
    >
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-center'>
        <h2 className='text-base sm:text-2xl text-primary mb-2'>{desc}</h2>
        <h2 className='head text-white '>{title}</h2>
      </div>
    </div>
  );
}
