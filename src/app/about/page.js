import { lazy, Suspense } from 'react';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';
import Loading from '../loading';
const WhyUs = lazy(() => import('@/components/about/WhyUs'));
const Banner = lazy(() => import('@/components/home/Banner'));
const OurClient = lazy(() => import('@/components/home/OurClient'));

export default function About() {
  return (
    <div className='w-[100%] h-[100%]'>
      <PuplicLandingPage title='من نحن' desc='لبيع الفواكهة الطازجة' />
      <Suspense fallback={<Loading />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <OurClient />
      </Suspense>
    </div>
  );
}
