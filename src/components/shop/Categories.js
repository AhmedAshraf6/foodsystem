'use client';
import { useMainContext } from '@/contexts/MainProvider';
import React from 'react';
import { useState } from 'react';
import CardProduct from '../shared/CardProduct';

export default function Categories() {
  const [activeCat, setActiveCat] = useState('الكل');
  const { productsData } = useMainContext();
  const [renderedProducts, setRenderedProducts] = useState(productsData);
  const categories = [
    'الكل',
    ...new Set(productsData.map((prod) => prod.category)),
  ];
  const handleProduct = (cat) => {
    setActiveCat(cat);
    if (cat !== 'الكل') {
      setRenderedProducts(() => {
        return productsData.filter((product) => product.category === cat);
      });
    } else {
      setRenderedProducts(productsData);
    }
  };
  return (
    <section className='container'>
      <div className='flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-2 '>
        {categories &&
          categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <button
                type='button'
                className={`btn ${
                  activeCat === category ? 'btn-full' : 'btn btn-outlined'
                }`}
                onClick={() => handleProduct(category)}
                key={index}
              >
                {category}
              </button>
            );
          })}
      </div>
      {renderedProducts && renderedProducts.length > 0 && (
        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-5 py-3 mt-3'>
          {renderedProducts.map((product) => {
            return <CardProduct key={product.id} {...product} />;
          })}
        </div>
      )}
    </section>
  );
}
