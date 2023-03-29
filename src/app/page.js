import Banner from '@/components/home/Banner';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import HomeSlider from '@/components/home/HomeSlider';
import InfoSection from '@/components/home/InfoSection';
import LandingPage from '@/components/home/LandingPage';
import OurClient from '@/components/home/OurClient';
import SpecialProduct from '@/components/home/SpecialProduct';
import Stats from '@/components/home/Stats';

export default function Home() {
  return (
    <section>
      <LandingPage />
      <Stats />
      <FeaturedProduct />
      <SpecialProduct />
      {/* <HomeSlider /> */}
      <InfoSection />
      <Banner />
      <OurClient />
    </section>
  );
}
