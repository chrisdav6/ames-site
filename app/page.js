import CTABanner from '@/components/CTABanner';
import HeroCarousel from '@/components/HeroCarousel';
import LowerRedHero from '@/components/LowerRedHero';
import ProductGrid from '@/components/ProductGrid';
import { BsConeStriped } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='w-screen'>
      <HeroCarousel />
      <LowerRedHero />
      <CTABanner
        text='Onsite Demonstrations and Consultation'
        subText='Foremost in developing sensor technology for pavement
              measurements.'
        btnText='Make an Appointment!'
        icon={<BsConeStriped className='w-14 h-14' />}
        btnIcon={<FaCalendarAlt className='hidden group-hover:flex w-4 h-4' />}
      />
      <ProductGrid />
    </div>
  );
}
