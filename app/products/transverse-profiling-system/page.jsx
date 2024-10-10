import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OptionsCard from '@/components/OptionsCard';

export const metadata = {
  title: 'Ames Engineering | 3D Transverse Profiling System, Rut Depth',
  description:
    'For measuring Rut Depth and imaging an entire lane width at once at highway speeds, take a look at our Transverse Profiling System.',
};

export default function TransverseProfilingSystem() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Transverse Profiling System
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/TransverseProfilingSystemProductImage.jpg'
          fill
          alt='3D Transverse Profiling System, Rut Depth'
          className='w-full object-cover object-[-50px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link
            href='/pdf/Ames3DTransverseProfileMeasurementSystemBrochure.pdf'
            target='_blank'
          >
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
          The{' '}
          <span className='font-bold'>Ames Transverse Profiling System</span> is
          the latest innovation to complete your asset management data
          collection. It collects the entire lane width as you drive, and can be
          used to measure many roadway features, including - rutting, lane
          markings, visual crack inspection and edge drop-offs.
        </p>

        <p className='mt-6'>
          The system uses a single laser and high speed camera to capture 3D
          transverse profile data at highway speeds. Capable of being either
          integrated with our High Speed Profiler or used as a standalone unit,
          it easily installs onto your host vehicle making it one of the most
          cost effective solutions for pavement condition data collection.
        </p>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-10'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#systemOverview'>System Overview</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#2K'>2K Features</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#4K'>4K Features</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#additionalFeatures'>Additional Features</Link>
        </Button>
      </div>

      <div id='systemOverview' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          System Overview
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Portable system easily installs onto host vehicle using standard
            mounting hardware
          </li>
          <li>
            - One compact sensor unit capable of covering entire lane 13′ width
            (4m)
          </li>
          <li>
            - Uses a standard ruggedized laptop computer for data collection and
            analysis
          </li>
          <li>
            - Comprehensive analysis software for post collection viewing and
            analyzing of pavement condition data
          </li>
          <li>- Different systems designed to meet your needs & budget</li>
        </ul>
      </div>

      <div id='2K' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Transverse Profile & Rut System – 2K Features
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Collects surface image, lane markings, rut data, sealed & unsealed
            crack detection
          </li>
          <li>- 2,048 Points / Profile</li>
          <li>- Sample Rate – 2,500-4,000 Profiles / second</li>
          <li>- Travel Speed – 60 mph</li>
          <li>- Longitudinal Spacing – 0.25 – 0.5 inch</li>
          <li>- Transverse Coverage – 13 feet</li>
          <li>- Transverse Resolution – 1.95mm</li>
          <li>- Vertical Range +/- 4 inches</li>
          <li>- Vertical Resolution – 0.65 mm</li>
        </ul>
      </div>

      <div id='4K' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Transverse Profile & Rut System – 4K Features
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Collects the best surface image, lane markings, rut data, sealed &
            unsealed crack detection and estimated macrotexture
          </li>
          <li>- 4,096 Points / Profile</li>
          <li>- Sample Rate – 2,500 – 4,000 Profiles / second</li>
          <li>- Travel Speed – 60 mph</li>
          <li>- Longitudinal Spacing – 0.1 – 0.2 inch</li>
          <li>- Transverse Coverage – 13 feet</li>
          <li>- Transverse Resolution – 1.95mm</li>
          <li>- Vertical Range +/- 4 inches</li>
          <li>- Vertical Resolution – 0.30 mm</li>
        </ul>
      </div>

      <div id='additionalFeatures' className='mt-8 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Additional Features
        </h3>

        <h2 className='mt-5 p-4 bg-orange-600 text-xl text-white'>
          Don't forget to update text below
        </h2>

        {/* Need features text */}
        <section className='grid lg:grid-cols-2 gap-5 justify-center w-full mt-4'>
          <OptionsCard
            src='/images/vehicleMountCardImage.jpg'
            alt='Vehicle Mount'
            title='Vehicle Mount'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
          <OptionsCard
            src='/images/modelViewCardImage.jpg'
            alt='3D Model View'
            title='3D Model View'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
          <OptionsCard
            src='/images/rangeViewCardImage.jpg'
            alt='3D Range View'
            title='3D Range View'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
          <OptionsCard
            src='/images/intensityViewCardImage.jpg'
            alt='3D Intensity View'
            title='3D Intensity View'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
        </section>
      </div>
    </div>
  );
}
