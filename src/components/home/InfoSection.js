import Image from 'next/image';
import Link from 'next/link';
import VideoModal from './VideoModal';
export default function InfoSection() {
  return (
    <section className='container flex flex-col md:flex-row gap-5 items-center '>
      <div className='flex-1'>
        <span className='text-gray-400 mb-2 sm:mb-3'>منذ عام 1999</span>
        <h2 className='head flex flex-row gap-3'>
          نحن
          <span className='text-primary'>فروتكها</span>
        </h2>
        <p className='paragraph'>
          حتى المبتذلة كدعاية أو أعضاء. في solludicinum ، لا كتلة شركة الطيران
          ولا بقية الصناعة. الاستثمار العقاري يحتاج إلى أن يوضع موضع التنفيذ. من
          أجل التغلب على الألم ، تغلبه الحكمة ، لكنه يريد ذلك أحيانًا. لموظفي
          كرة القدم.
        </p>
        <p className='paragraph'>
          من المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. بحكمة ، من السهل
          عليه أن يرفض الحقيقة الأقل ، وبجهد أقل المرونة التي نقودها.
        </p>
        <div className='flex justify-start'>
          <Link className='btn btn-full' href='/about' aria-label='about page'>
            لمعرفة المزيد
          </Link>
        </div>
      </div>
      {/*  w-[200px] relative h-[400px] max-h-[400px] bg-[url("/video-image.jpg")] bg-cover bg-center-center */}
      <div className='flex-1 relative'>
        <Image
          width={500}
          height={500}
          alt='fruit'
          src='/video-image.jpg'
          className='object-contain w-[100%] h-[100%] rounded-lg'
        />
        <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[#07212e] opacity-60 rounded-lg'></div>
        <VideoModal />
      </div>
    </section>
  );
}
