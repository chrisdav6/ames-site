import CTABanner from '@/components/CTABanner';
import HeroCarousel from '@/components/HeroCarousel';
import LowerRedHero from '@/components/LowerRedHero';

export default function Home() {
  return (
    <div className='w-screen'>
      <HeroCarousel />
      <LowerRedHero />
      <CTABanner />
    </div>
  );
}
