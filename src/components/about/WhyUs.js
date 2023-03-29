import { FaShippingFast, FaMoneyBillAlt } from 'react-icons/fa';
import { BsBagCheckFill } from 'react-icons/bs';
import { RiRefund2Fill } from 'react-icons/ri';
import Image from 'next/image';

export default function WhyUs() {
  return (
    <section className='container flex flex-col lg:flex-row gap-5 items-start '>
      <div className='flex-1'>
        <h2 className='head'>
          لماذا <span className='text-primary'>فروتكها</span>
        </h2>
        <div className='grid grid-cols-auto sm:grid-cols-2 gap-x-3 gap-y-6'>
          <div className='flex items-center gap-x-2 flex-1 '>
            <div className='rounded-full flex justify-center items-center p-3 sm:p-4 border-2 border-primary cursor-pointer text-primary '>
              <FaShippingFast className=' text-lg sm:text-3xl' />
            </div>
            <div>
              <span className='mb-2'>شحن مجاني</span>
              <h4 className='text-gray-400'>
                فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
              </h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 flex-1 '>
            <div className='rounded-full flex justify-center items-center p-3 sm:p-4 border-2 border-primary cursor-pointer text-primary '>
              <FaMoneyBillAlt className=' text-lg sm:text-3xl' />
            </div>
            <div>
              <span className='mb-2'>أفضل سعر</span>
              <h4 className='text-gray-400'>
                فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
              </h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 flex-1 '>
            <div className='rounded-full flex justify-center items-center p-3 sm:p-4 border-2 border-primary cursor-pointer text-primary '>
              <BsBagCheckFill className=' text-lg sm:text-3xl' />
            </div>
            <div>
              <span className='mb-2'>صندوق مخصص</span>
              <h4 className='text-gray-400'>
                فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
              </h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 flex-1 '>
            <div className='rounded-full flex justify-center items-center p-3 sm:p-4 border-2 border-primary cursor-pointer text-primary '>
              <RiRefund2Fill className=' text-lg sm:text-3xl' />
            </div>
            <div>
              <span className='mb-2'>استرداد سريع</span>
              <h4 className='text-gray-400'>
                فليكن من دواعي سروري أولئك الذين يتهمون بالألم ،
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 relative'>
        <Image
          width={500}
          height={500}
          alt='fruit'
          src='/video-image.jpg'
          className='object-contain w-[100%] h-[100%] rounded-lg'
        />
        {/* <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[#07212e] opacity-60 rounded-lg'></div> */}
      </div>
    </section>
  );
}
