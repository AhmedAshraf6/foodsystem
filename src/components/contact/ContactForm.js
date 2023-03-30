import { FaMap, FaAddressBook } from 'react-icons/fa';
import { BsAlarmFill, BsClock } from 'react-icons/bs';
export default function ContactForm() {
  return (
    <section className='container grid grid-cols-2 grid-rows-3 lg:grid-cols-3  gap-x-4 gap-y-3'>
      <div className='col-span-2 row-span-3'>
        <h2 className='text-lg sm:text-2xl font-light mb-2'>
          هل لديك أي سؤال؟
        </h2>
        <p className='paragraph text-md'>
          من المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. لنكن منصفين! من
          الصعب أن نفترض. التسامح الذي يبحث فيه عن شيء آخر. الجسد نفسه بمتعة
          أقل؟ الألم يولد!
        </p>
        <form className='grid sm:grid-cols-2 gap-3'>
          <input type='text' className='input' placeholder='الأسم' />
          <input type='text' className='input' placeholder='الإيميل' />
          <input type='text' className='input' placeholder='رقم الهاتف' />
          <input type='text' className='input' placeholder='العنوان' />
          <textarea
            className='input col-span-2 min-h-[200px]'
            placeholder='الرسالة'
          ></textarea>
          <div className='flex justify-start'>
            <button type='submit' className='btn btn-full' role='button'>
              تسجيل
            </button>
          </div>
        </form>
      </div>
      <aside className='col-span-2 lg:col-span-1 row-span-2 bg-gray-100  flex flex-row justify-between lg:justify-start flex-wrap lg:flex-col  gap-y-3 sm:gap-y-7 py-4 sm:py-7 px-3 sm:px-5 rounded'>
        <div className='flex gap-x-2'>
          <FaAddressBook className='text-primary text-3xl' />
          <div>
            <h2 className='text-lg mb-2'>عنوان المتجر</h2>
            <address className='text-gray-500 text-base'>
              28 شارع اليوم السابع <br />
              المنيا سمالوط <br />
              مصر
            </address>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <BsAlarmFill className='text-primary text-3xl' />
          <div>
            <h2 className='text-lg mb-2'>ساعات التسوق</h2>
            <address className='text-gray-500 text-base'>
              الإثنين- الجمعة: 8 إلى 9 مساءً
              <br />
              السبت - الأحد: 10 إلى 8 مساءً
            </address>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <BsClock className='text-primary text-3xl' />
          <div>
            <h2 className='text-lg mb-2'>تواصل</h2>
            <address className='text-gray-500 text-base'>
              الهاتف: +20 0121221212
              <br />
              البريد :ِahmed@ahmedashraf.com
            </address>
          </div>
        </div>
      </aside>
    </section>
  );
}
