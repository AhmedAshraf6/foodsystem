import ButtonAddToCard from '@/components/shared/ButtonAddToCard';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';
import { allProducts } from '@/utils/Constants';
import Image from 'next/image';

export default function page({ params }) {
  const product = allProducts.find(
    (product) => product.id == params.singleProduct
  );

  return (
    <>
      <PuplicLandingPage title='منتج واحد' desc='مزيد من التفاصيل عن المنتج' />
      <section className='container flex flex-col sm:flex-row gap-4 '>
        <Image
          src={product?.images && product.images[0]}
          width={500}
          height={500}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          placeholder='blur'
          blurDataURL='/spinner.svg'
          alt='image not avalible'
        ></Image>
        <div className='flex flex-col gap-y-3'>
          <h2 className='head m-0'>{product?.name}</h2>
          <span className='text-gray-400'>لكل كيلوجرام</span>
          <h3 className='text-xl '>{product?.price}</h3>
          <p className='paragraph text-gray-500'>{product?.disc}</p>
          {/* <div className='flex flex-col sm:flex-row gap-3'>
            <input type='number' className='input py-0' min='1' />
            <button type='button' className='btn btn-outlined '>
              تحديث
            </button>
          </div> */}
          <div className='flex justify-start'>
            <ButtonAddToCard id={product?.id} />
          </div>
        </div>
      </section>
    </>
  );
}
