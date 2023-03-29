import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
export default function SwiperJs() {
  return (
    <Swiper navigation modules={[Navigation]} className='my-swiper-images'>
      <div key={img.id}>
        <SwiperSlide className='bg-info'>
          <div className='card border-0 bg-transparent'>
            <div className='img text-center'>
              <img className='card-img-top mx-auto mx-sm-0' alt='test' />
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
