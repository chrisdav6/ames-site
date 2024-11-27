import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OptionsCard from '@/components/OptionsCard';

export const metadata = {
  title: 'Ames Engineering | 4200 Profilograph',
  description:
    'The original patented Ames Profilograph designed to capture accurate and efficient California Style profile measurements.',
};

export default function Profilograph4200() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          4200 Profilograph
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/4200ProfilographProductImage.jpg'
          fill
          alt='4200 Profilograph'
          className='w-full object-cover object-[-110px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
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
          The original patented{' '}
          <span className='font-bold'>Ames Profilograph</span> designed to
          capture accurate and efficient “California Style” profile
          measurements. Developed for Paving contractors, Testing agencies and
          State and federal highway departments.
        </p>

        <p className='mt-6'>
          Tablet computer upgrades are available for existing Model 4200
          Profilographs. This upgrade replaces your existing PCL-486 handheld
          computer with a Windows based tablet computer running our Ames
          Profilograph software. Similar to our Ames Profiler software which
          powers our inertial profilers, this includes powerful collection,
          analysis, and viewer tools.
        </p>

        <p className='mt-6 font-bold'>
          Need more information on Lightweight Profilers in general? Take a look
          at our{' '}
          <Link
            href='/resources/inertial-road-profilers-faq'
            className='font-bold text-amesRed'
          >
            Frequently Asked Questions
          </Link>{' '}
          page for more information.
        </p>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-10'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#specs'>Specs</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#features'>Features</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#closer'>Closer Look</Link>
        </Button>
      </div>

      <div id='specs' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>Specs</h3>
        <ul className='text-lg mt-2'>
          <li>- Beam Length: 25 feet</li>
          <li>- Breakdown Length: 8.5 feet maximum</li>
          <li>- Breakdown Weight: 35 lbs maximum/piece</li>
          <li>- Setup time: 5 minutes</li>
          <li>
            - Battery Life: 8 hours with built-in battery, additional 8 hours
            with external pack
          </li>
          <li>- Units of Measure: English or Metric</li>
          <li>- Blanking band: User adjustable</li>
          <li>- Bump Height: User adjustable</li>
          <li>- Bump Width: User adjustable</li>
          <li>- Segment Length: User adjustable</li>
        </ul>
      </div>

      <div id='features' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Features
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Compact and lightweight</li>
          <li>- Battery operated – No generator, No gas, No noise!</li>
          <li>- On screen graphics display</li>
          <li>- Bump Detection Warning System (BDWS)</li>
          <li>- On screen display of Profile Index</li>
          <li>- Immediate results</li>
          <li>- Meets all ASTM E1274 standards (not just some of them)</li>
          <li>- Easily setup and operated by one person</li>
          <li>- Integral high speed thermal printer</li>
          <li>- Rugged IBM compatible computer</li>
          <li>- User friendly menu driven software</li>
          <li>- English or metric units</li>
          <li>- Selectable Butterworth filtering options</li>
          <li>- Automatic station marking</li>
          <li>- Shows “Must Grind” locations</li>
          <li>- Transfer data to office PC for additional analysis</li>
          <li>- Easily transported in a pickup or trailer</li>
          <li>- Reanalyze data files easily; with different parameters</li>
          <li>- Append additional data to existing files</li>
          <li>- Compressed print mode saves paper when desired</li>
          <li>- Towable with optional towing package</li>
          <li>
            - Data Acquisition Unit universally compatible with Lightweight &
            High Speed Profilers
          </li>
          <li>- The machine preferred by contractors and DOT’s</li>
        </ul>
      </div>

      <div id='closer' className='mt-8 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Closer Look
        </h3>

        {/* Need features text */}
        <section className='grid lg:grid-cols-2 gap-5 justify-center w-full mt-4'>
          <OptionsCard
            src='/images/4200SystemCardImage.jpg'
            alt='System'
            title='System'
            text='The original patented Ames Profilograph designed to capture accurate and efficient “California Style” profile measurements.'
          />
          <OptionsCard
            src='/images/4200ComputerCardImage.jpg'
            alt='Computer'
            title='Computer'
            text='Rugged IBM PCL-486 handheld computer, user friendly menu driven software with onscreen graphics display.'
          />
        </section>
      </div>
    </div>
  );
}
