import React, { lazy, Suspense } from 'react';
import Loading from './loading';
// const LandingPage = lazy(() => import('../components/home/LandingPage'));
import LandingPage from '@/components/home/LandingPage';
const FeaturedProduct = lazy(() =>
  import('../components/home/FeaturedProduct')
);
const Banner = lazy(() => import('../components/home/Banner'));
const Stats = lazy(() => import('../components/home/Stats'));
const SpecialProduct = lazy(() => import('../components/home/SpecialProduct'));
const InfoSection = lazy(() => import('../components/home/InfoSection'));
const OurClient = lazy(() => import('../components/home/OurClient'));
export default function Home() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <LandingPage />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeaturedProduct />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SpecialProduct />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <InfoSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <OurClient />
      </Suspense>
    </section>
  );
}
