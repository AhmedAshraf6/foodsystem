import { lazy, Suspense } from 'react';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';
import Loading from '../loading';
import Categories from '@/components/shop/Categories';

export default function page() {
  return (
    <>
      <PuplicLandingPage title='المتجر' desc='طازجة وعضوية' />
      <Categories />
    </>
  );
}
