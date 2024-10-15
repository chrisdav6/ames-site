import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | Paver-Mounted Real-Time Profiler',
  description:
    'Our Laser-based Real-Time Profiler measures profile and smoothness indices directly behind the paver.',
};

export default function RealTimeProfiler() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Real-Time Profiler
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/RealTimeProfilerProductImage.jpg'
          fill
          alt='Real-Time Profiler'
          className='w-full object-cover'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesRealTimeProfilerBrochure.pdf' target='_blank'>
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
          The <span className='font-bold'>Ames Real-Time Profiler</span> is a
          laser enabled smoothness measurement system that monitors profile and
          calculates smoothness indices directly behind the paver and displays
          profile as concrete is placed. Locates areas of localized roughness
          and must grind locations, Instantly calculates and displays Profile
          Index (PI) and International Roughness Index (IRI). Laptop can be
          mounted anywhere on the machine.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/rtpSensor.jpg'
            alt='Real-Time Profiler Sensor'
            caption='RTP Sensor'
          />
          <PhotoWithCaption
            image='/images/rtpInUse.jpg'
            alt='Real-Time Profiler In Use'
            caption='RTP In Use'
          />
        </div>

        <div className='mt-6'>
          <div>
            <h3 className='text-xl font-extrabold text-amesRed underline'>
              Advantages
            </h3>
            <span className='block mt-2'>
              <span className='font-bold'>Quality Control</span> - In-process
              profiling locates problem areas and informs fast and appropriate
              responses
            </span>
            <span className='block'>
              <span className='font-bold'>Easy to Use</span> - Mounts directly
              onto the back of your slipform paver
            </span>
            <span className='block'>
              <span className='font-bold'>Instant Information</span> - Rugged
              Panasonic Toughbook mounts to paver, creating a real-time
              scoreboard for monitoring smoothness values
            </span>
            <span className='block'>
              <span className='font-bold'>Accountability</span> - Brings quality
              control awareness to everyone involved in the paving process
            </span>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-8'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#system'>System</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#computerHardware'>Computer Hardware</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#computerSoftware'>Computer Software</Link>
        </Button>
      </div>

      <div id='system' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          System
        </h3>

        <ul className='text-lg mt-2'>
          <li>- Collects measurements at speeds between 0 and 80 ft/min</li>
          <li>
            - Laser height sensor with a range of five in. and a resolution of
            .001 in.
          </li>
          <li>- Horizontal distance measured with an optical encoder</li>
          <li>- Pavement elevation sample storage: 3 inches</li>
          <li>- Profile wavelength range: 1.8 to 300 feet</li>
          <li>- Vertical distance sensor resolution: .002 inch</li>
          <li>- Data storage: 250,000 miles</li>
        </ul>
      </div>

      <div className='flex flex-col md:flex-row mt-6 gap-4'>
        <PhotoWithCaption
          image='/images/rtpDisplay.jpg'
          alt='Real-Time Profiler Display'
          caption='RTP Display'
        />
        <PhotoWithCaption
          image='/images/rtpSetup.jpg'
          alt='Real-Time Profiler Setup'
          caption='RTP Setup'
        />
      </div>

      <div id='computerHardware' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Hardware
        </h3>

        <ul className='text-lg mt-2'>
          <li>
            - Panasonic Toughbook laptop with a 500 GB hard drive and 4 GB of
            RAM
          </li>
          <li>
            - Color anti-reflective, outdoor readable tough screen display
          </li>
          <li>
            - Electronic components housed in water resistant and dust tight
            case
          </li>
          <li>
            - Field replacement of any components does not require
            re-calibration of the system
          </li>
          <li>
            - Up to four sensors can be installed at various locations behind
            the paver
          </li>
          <li>- Additional sensors can be field installed</li>
        </ul>
      </div>

      <div id='computerSoftware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Software
        </h3>

        <ul className='text-lg mt-2'>
          <li>
            - Displays profile and updates smoothness indices with real time
            data collection
          </li>
          <li>- Equipped with variable high and low pass filter options</li>
          <li>- Contains automatic bump detection feature</li>
          <li>
            - Capable of displaying “true profile,” rolling straightedge, and
            California-type profilograph profile on screen
          </li>
          <li>- Identifies location of “out-of-specification” bumps</li>
          <li>
            - All fields selectable output to ASCII file and selectable field
            delimiter
          </li>
        </ul>
      </div>
    </div>
  );
}
