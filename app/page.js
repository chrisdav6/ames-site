import CTABanner from '@/components/CTABanner';
import HeroCarousel from '@/components/HeroCarousel';
import LowerRedHero from '@/components/LowerRedHero';
import ProductGrid from '@/components/ProductGrid';

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
      />
      <ProductGrid />
    </div>
  );
}
