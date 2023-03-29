import React from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
export default function HomeSlider() {
  return (
    <swiper-container
      slides-per-view='1'
      speed='500'
      loop='true'
      css-mode='true'
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  );
}
