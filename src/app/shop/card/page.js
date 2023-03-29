import Link from 'next/link';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';
import React from 'react';
import CardContainer from '@/components/card/CardContainer';

export default function page() {
  return (
    <>
      <PuplicLandingPage title='السلة' desc='طازجة وعضوية' />

      <section className='container '>
        <CardContainer />
      </section>
    </>
  );
}
