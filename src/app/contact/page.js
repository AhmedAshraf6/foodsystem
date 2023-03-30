import ContactForm from '@/components/contact/ContactForm';
import LandingPage from '@/components/home/LandingPage';
import PuplicLandingPage from '@/components/shared/PuplicLandingPage';

export default function page() {
  return (
    <div>
      <PuplicLandingPage title='تواصل معنا' desc='دعم 24 ساعة' />
      <ContactForm />
    </div>
  );
}
