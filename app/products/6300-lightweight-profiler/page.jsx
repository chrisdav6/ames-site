import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OptionsCard from '@/components/OptionsCard';

export const metadata = {
  title: 'Ames Engineering | 6300 Light Weight Profiler',
  description:
    'The Ames Lightweight Inertial Road Profiler allows for repeatable smoothness measurements sooner after paving.',
};

export default function LightWeightProfiler6300() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          6300 Light Weight Profiler
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/LightweightProfilerProductImage.jpg'
          fill
          alt='6300 Light Weight Profiler'
          className='w-full object-cover object-[-110px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link
            href='/pdf/Ames6300LightweightProfilerBrochure.pdf'
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
          The second generation{' '}
          <span className='font-bold'>Ames Lightweight Profiler</span> has
          emerged as the inertial profiler of choice for top paving contractors
          throughout the U.S. and beyond. Available with either one or two wheel
          track sensors, the 6300 has proven to consistently provide accurate
          and repeatable results that our customers can depend on. Documented
          testing done by independent government agencies have shown that the
          Ames Profiler provides accurate and repeatable comparisons to true rod
          and level profile. Studies have also shown excellent correlations to
          the “California-style” profilograph. We developed this system with
          paving contractors, testing agencies, and State and Federal highway
          departments in mind in order to make their jobs more efficient.
        </p>

        <div className='mt-6 font-bold '>
          <p className='underline'>
            All of our lightweight profilers meet or exceed the following
            requirements:
          </p>
          <span className='block mt-2'>
            - ASTM E950 Class 1 profiler specifications
          </span>
          <span className='block'>- AASHTO PP 51-02</span>
          <span className='block'>- Texas test method TEX 1001-S</span>
        </div>

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
          <Link href='#computerHardware'>Computer Hardware</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#computerSoftware'>Computer Software</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#trailer'>Transport Trailer</Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='#additionalFeatures'>Additional Features</Link>
        </Button>
      </div>

      <div id='specs' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>Specs</h3>
        <ul className='text-lg mt-2'>
          <li>
            - Available with either Ames 5K Gocator or Ames AccuTexture 100
            sensors
          </li>
          <li>
            - Capable of collecting measurements at speeds between 8 and 15 mph
          </li>
          <li>
            - Laser-type height sensor with a range of five inches and a
            resolution of .002 inch
          </li>
          <li>
            - Pavement elevation sampling: Up to 16,000 samples per second
          </li>
          <li>- Profile wavelength range: 1.8 to 314 feet</li>
          <li>- Accelerometer resolution: .0001g</li>
          <li>- Data storage: 50,000 miles</li>
          <li>- Data interchange: Secure Digital (SD) card / USB jump drive</li>
        </ul>
      </div>

      <div id='computerHardware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Hardware
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Easily removable Panasonic Toughbook laptop with a 500 GB hard
            drive and 4 GB of RAM
          </li>
          <li>- Take off the laptop and do analysis in the truck or office!</li>
          <li>
            - Transmissive daylight readable active matrix LCD color touch
            screen display
          </li>
          <li>- Ethernet connection from laptop to data acquisition hub</li>
          <li>- RS-485 serial connection and Ethernet to sensors</li>
          <li>
            - Optional USB thermal strip printer available for plotting pavement
            profile at job site
          </li>
          <li>
            - All electronic components housed in water resistant and dust tight
            case
          </li>
          <li>
            - Components case mounted with shock absorbers in the rear
            compartment of vehicle
          </li>
          <li>
            - Field replacement of any component does not require re-calibration
            of the system
          </li>
          <li>
            - Capable of connecting a second sensor to profile both wheel tracks
            simultaneously
          </li>
          <li>- Second sensor is field installable</li>
        </ul>
      </div>

      <div id='computerSoftware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Software
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Microsoft Windows operating system</li>
          <li>
            - Displays profile and real time IRI while data is being collected
          </li>
          <li>
            - Calculates Profile Index (PI), International Roughness Index
            (IRI), Ride Quality Index (RQI), and Ride Number (RN)
          </li>
          <li>
            - Plots and displays true profile, California profilograph profile,
            and rolling straightedge profile
          </li>
          <li>- Equipped with variable high and low pass filter options</li>
          <li>- Contains automatic bump detection feature</li>
          <li>- Identifies location of “out of specification” bumps</li>
          <li>- Uses system’s odometer mode for bump location</li>
          <li>
            - Equipped with the following export file options: ERD, html, Texas
            PRO, CSV and ASCII
          </li>
          <li>
            - All fields selectable output to ASCII file and selectable
            delimiter
          </li>
        </ul>
      </div>

      <div id='trailer' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Transport Trailer
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Fully enclosed trailer</li>
          <li>- Overall length: 17’ maximum; Interior length 13’6’’ minimum</li>
          <li>- Overall width: 8’5” maximum; Interior width: 6’6” minimum</li>
          <li>- Overall height: 8’6” maximum; Interior height: 6’6”</li>
          <li>- Tandem Axle Wedge Nose</li>
        </ul>
      </div>

      <div id='additionalFeatures' className='mt-8 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Additional Features
        </h3>

        {/* Need features text */}
        <section className='grid lg:grid-cols-2 gap-5 justify-center w-full mt-4'>
          <OptionsCard
            src='/images/dataAcquisitionUnitCardImage.jpg'
            alt='Data Acquisition Unit'
            title='Data Acquisition Unit'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
          <OptionsCard
            src='/images/panasonicToughbookMountCardImage.jpg'
            alt='Panasonic Toughbook Mount'
            title='Panasonic Toughbook Mount'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis impedit placeat autem eos fugit consequuntur molestiae magnam.'
          />
        </section>
      </div>
    </div>
  );
}
