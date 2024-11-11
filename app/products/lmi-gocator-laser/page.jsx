import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | LMI Gocator Line Laser Profile Sensor',
  description:
    'Our Gocator Laser System reduces artificially high IRI values during profile collection. Available on both High Speed and Lightweight Profilers.',
};

export default function LMIGocatorLaserSystem() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          LMI Gocator Laser System
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/geocatorLaserProductImage.jpg'
          fill
          alt='LMI Gocator Laser System'
          className='w-full object-cover object-[-150px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/Ames5KGocatorBrochure.pdf' target='_blank'>
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
          The Ames <span className='font-bold'>Gocator Laser System</span> is a
          sensor which uses a line laser to provide a simulated tire tread
          pattern in order to reduce artificially high IRI values during profile
          collection. Available on both our High Speed and Lightweight Inertial
          Profilers, this sensor directly replaces the RoLine sensors. If you
          are profiling ground or tined concrete, this is the sensor that will
          perform the best.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/geocatorLaserMountedCardImage.jpg'
            alt='Geocator Laser Mounted'
            caption='Geocator Laser Mounted'
          />
          <PhotoWithCaption
            image='/images/geocatorLaserInUseCardImage.jpg'
            alt='Geocator Laser In Use'
            caption='Geocator Laser In Use'
          />
        </div>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-8'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#geocatorFeatures'>5K Geocator Features</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#researchReports'>Research Reports</Link>
        </Button>
      </div>

      <div id='geocatorFeatures' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          5K Geocator Features
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Best choice for use on ground or longitudinally tined concrete
            surfaces
          </li>
          <li>
            - Reduces inflated IRI and PI values caused by pavement texture
          </li>
          <li>
            - Bridges transverse and longitudinal joints; and reduces their
            effect on profile measurements
          </li>
          <li>
            - Better profiler repeatability on textured surfaces, meets ASTM E
            950
          </li>
          <li>
            - Currently in use for QC/QA testing by state DOT’s as well as
            paving contractors
          </li>
        </ul>
      </div>

      <div id='researchReports' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Research Reports
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            <Link
              href='/pdf/ReferenceProfilers.pdf'
              className='hover:text-amesRed'
              target='_blank'
            >
              - 2007 FHWA Reference Profiler Full Report
            </Link>
          </li>
          <li>
            <Link
              href='/pdf/ReferenceProfilerSummary.pdf'
              className='hover:text-amesRed'
              target='_blank'
            >
              - 2007 FHWA Reference Profiler Highlights
            </Link>
          </li>
          <li>
            <Link
              href='/pdf/RT702.pdf'
              className='hover:text-amesRed'
              target='_blank'
            >
              - 2005 ACPA Profiler Repeatability Tests - R&T Update
            </Link>
          </li>
          <li>
            <Link
              href='/pdf/ACPA2005ProfilerRepeatability.pdf'
              className='hover:text-amesRed'
              target='_blank'
            >
              - 2005 ACPA Profiler Repeatability Tests - Full Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
