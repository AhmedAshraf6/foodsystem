import Image from 'next/image';

export default function OurClient() {
  return (
    <section className='bg-gray-100 my-10'>
      <div className='container flex flex-wrap items-center justify-center sm:justify-between'>
        <Image
          width={200}
          height={200}
          className='object-contain '
          src='/logos/1.png'
          alt='image not avaluble'
        />
        <Image
          width={200}
          height={200}
          className='object-contain '
          src='/logos/2.png'
          alt='image not avaluble'
        />
        <Image
          width={200}
          height={200}
          className='object-contain '
          src='/logos/3.png'
          alt='image not avaluble'
        />
        <Image
          width={200}
          height={200}
          className='object-contain '
          src='/logos/4.png'
          alt='image not avaluble'
        />
      </div>
    </section>
  );
}
