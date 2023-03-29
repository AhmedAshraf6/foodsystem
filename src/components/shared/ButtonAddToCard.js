'use client';
import { useMainContext } from '@/contexts/MainProvider';
export default function ButtonAddToCard({ id }) {
  const { addProduct, itemsInCard } = useMainContext();
  return (
    <button
      className=' btn btn-full btn-full-disabled'
      onClick={() => addProduct(id)}
      disabled={itemsInCard.includes(id) ? true : false}
    >
      {itemsInCard.includes(id) ? 'في السلة' : 'اضافة الي السلة'}
    </button>
  );
}
