import Link from 'next/link';

export default function Banner() {
  return (
    <section className=''>
      {/* bg-[url("/advertice.jpg")]  bg-cover bg-top bg-no-repeat scale-x-[-1] */}
      <div className='bg-gray-200'>
        <div className='container '>
          <h2 className='head'>بيع ديسمبير فعال!</h2>
          <h2 className='head text-primary'>بخصم كبير</h2>
          <div className='flex flex-col sm:flex-row gap-x-3 gap-y-2 flex-wrap items-start sm:items-center mb-2'>
            <span>تخفيض السعر</span>
            <h1 className='text-5xl sm:text-7xl font-bold text-primary'>50%</h1>
            <span>خصم</span>
          </div>
          <div className='flex justify-start'>
            <Link
              href='/shop'
              className='btn btn-full'
              aria-label='buy now product'
            >
              شراء الان
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
