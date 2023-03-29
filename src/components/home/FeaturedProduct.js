import { allProducts } from '@/utils/Constants';
import React from 'react';
import CardProduct from '../shared/CardProduct';

export default function FeaturedProduct() {
  return (
    <section className='text-center py-3 sm:py-10 px-3 sm:px-12 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-bold'>
        منتجا<span className='text-primary'>تنا</span>
      </h1>
      <p className='text-gray-500 py-3'>
        جميع المنتجات التي لدينا طازجة وبأعلي جودة وبامكانك استرجعها في أي وقت
        تريده لمدة 3 أيام
      </p>
      {allProducts && allProducts.length > 0 && (
        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 py-3'>
          {allProducts.slice(0, 3).map((product) => {
            return <CardProduct key={product.id} {...product} />;
          })}
        </div>
      )}
    </section>
  );
}
