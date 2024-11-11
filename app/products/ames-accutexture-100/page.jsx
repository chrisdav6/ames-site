import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | AccuTexture 100',
  description:
    'A Single-Point Laser Sensor that can measure both Texture and Profile data at high speeds.',
};

export default function AmesAccuTexture100() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Ames AccuTexture 100
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/Accutexture100ProductImage.jpg'
          fill
          alt='Ames AccuTexture 100'
          className='w-full object-cover object-[-150px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesAccuTexture100Brochure.pdf' target='_blank'>
            Brochure
          </Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/sales/salesRequest'>Sales</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/support/supportRequest'>Service</Link>
        </Button>
      </div>

      {/* Product Description */}
      <div className='mt-6 text-lg text-center md:text-left'>
        <p>
          The Ames <span className='font-bold'>AccuTexture 100</span> is an
          exclusive sensor that has been developed as the new standard in
          accurate texture measurements. Gone are the days of variances due to
          speed and surface type. The AccuTexture 100 outperforms the Optocator
          on all surfaces in testing performed by Ames Engineering.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/accuTextureSpinningDiskCardImage.jpg'
            alt='AccuTexture Spinning Disk Test'
            caption='AccuTexture Comparison'
          />
          <PhotoWithCaption
            image='/images/optocatorSpinningDiskCardImage.jpg'
            alt='Optocator Spinning Disk Test'
            caption='Optocator Comparison'
          />
          <PhotoWithCaption
            image='/images/accuTextureResults.jpg'
            alt='AccuTexture vs Optocator Comparison Results'
            caption='Comparison Results'
          />
        </div>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-8'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#laserOverview'>Laser Overview</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#specs'>Specs</Link>
        </Button>
      </div>

      <div id='laserOverview' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Laser Overview
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - This 100 kHz sensor simultaneously collects profile and texture
            information at highway speeds
          </li>
          <li>- The most cost effective option for texture measurements</li>
          <li>- Can easily be retrofitted to existing Ames profilers</li>
        </ul>
      </div>

      <div id='specs' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          AccuTexture 100 Specs
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Sample Rate: 100 Khz</li>
          <li>- Elliptical laser spot</li>
          <li>- Size at near: 1 x 3 mm</li>
          <li>- Size at far: 0.8 x 1.5 mm</li>
          <li>- Triangulation at near point : 7 degrees</li>
          <li>- Triangulation at far point: 14 degrees</li>
          <li>- Maximum exposure time: 12µs</li>
        </ul>
      </div>
    </div>
  );
}
