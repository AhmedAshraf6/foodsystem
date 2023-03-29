import WhyUs from '@/components/about/WhyUs';
import Banner from '@/components/home/Banner';
import OurClient from '@/components/home/OurClient';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';

export default function About() {
  return (
    <div className='w-[100%] h-[100%]'>
      <PuplicLandingPage title='من نحن' desc='لبيع الفواكهة الطازجة' />
      <WhyUs />
      <Banner />
      <OurClient />
    </div>
  );
}
