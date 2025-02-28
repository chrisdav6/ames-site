import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OptionsCard from '@/components/OptionsCard';

export const metadata = {
  title: 'Ames Engineering | 8300 Stop and Go Road Profiler',
  description:
    'The Ames Stop and Go Inertial Road Profiler allows for smoothness measurement of a roadway at up to 70 MPH.',
};

export default function StopAndGoProfiler8300() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          8300 Stop and Go Inertial Road Profiler
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/StopAndGoProfilerProductImage.jpg'
          fill
          alt='8300 Stop and Go Profiler'
          className='w-full object-cover object-[-50px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link
            href='/pdf/Ames8300StopAndGoProfilerBrochure.pdf'
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
          <span className='font-bold'>
            Model 8300 Stop and Go Inertial Profiler
          </span>{' '}
          system upgrade enables you to collect accurate profile data in live
          traffic situations were stops and starts are necessary. No longer will
          you need to be moving before data collection is initiated. Ames has
          developed proprietary sensor technology that removes the error caused
          by starting and stopping the vehicle. Our sensor technology removes
          the vehicle dynamics from the profile data allowing for accurate data
          to be collected in those difficult urban live traffic situations.
        </p>

        <p className='mt-6'>
          The Model 8300 High Speed Profiler with the “Stop & Go” option can
          also be purchased as a complete system, or upgrade your standard Model
          8300 system with the “Stop & Go” package. See our list of options
          below for more details. We developed this system with paving
          contractors, testing agencies, and State and Federal highway
          departments in mind in order to make their jobs more efficient.
        </p>

        <div className='mt-6 font-bold '>
          <p className='underline'>
            The Ames High Speed Profiler meets or exceeds the following
            requirements:
          </p>
          <span className='block mt-2'>
            - ASTM E950 Class 1 profiler specifications
          </span>
          <span className='block'>- AASHTO PP 51-02</span>
          <span className='block'>- Texas test method TEX 1001-S</span>
        </div>

        <p className='mt-6 font-bold'>
          Need more information on High Speed Profilers in general? Take a look
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
          <Link href='#options'>Available Options</Link>
        </Button>
      </div>

      <div id='specs' className='mt-6 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>Specs</h3>
        <ul className='text-lg mt-2'>
          <li>
            - High Speed system can be on front or rear mount using the vehicles
            standard 2″ hitch receiver
          </li>
          <li>
            - Ruggedized laptop mounted in cab of vehicle with test personnel
          </li>
          <li>- Single or dual wheel track systems</li>
          <li>- Frame is adjustable to accommodate different vehicles</li>
          <li>
            - Capable of collecting measurements at speeds between 10 and 70 mph
          </li>
          <li>
            - Laser height sensor with a range of eight inches and a resolution
            of 0.002 inch
          </li>
          <li>
            - Horizontal distance measured with either optical encoder with 0.15
            inch resolution or Our{' '}
            <Link
              href='/products/ames-gps-dmi'
              className='font-bold text-amesRed'
            >
              Profiler GPS-DMI
            </Link>{' '}
            Option (Accurate to 0.05%)
          </li>
          <li>- Pavement elevation sampling: 16,000 samples per second</li>
          <li>
            - Pavement elevation sample storage: software selectable 1-16
            samples/foot
          </li>
          <li>- Profile wavelength range: 0.5 to 6,400 feet</li>
          <li>- Accelerometer resolution: 0.0001g</li>
        </ul>
      </div>

      <div id='computerHardware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Hardware
        </h3>
        <ul className='text-lg mt-2'>
          <li>
            - Panasonic Toughbook laptop with a 500 GB hard drive and 4 GB of
            RAM, upgradable with more RAM and up to 1 TB SSD.
          </li>
          <li>
            - Color SVGA anti-reflective, outdoor readable touch display screen
          </li>
          <li>
            - Ethernet connection from laptop to data acquisition computer
          </li>
          <li>
            - RS-485 serial network and ethernet in one cable between data
            acquisition computer and all modules
          </li>
          <li>
            - All electronic components housed in water resistant and dust tight
            enclosures
          </li>
          <li>
            - Field replacement of any component does not require re-calibration
            of the system
          </li>
          <li>
            - Capable of field installing a second sensor to profile both wheel
            tracks simultaneously
          </li>
        </ul>
      </div>

      <div id='computerSoftware' className='mt-4 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Computer Software
        </h3>
        <ul className='text-lg mt-2'>
          <li>- Microsoft Windows operating system</li>
          <li>- Display profile in real time while data is being collected</li>
          <li>
            - Calculates Profile Index (PI), International Roughness Index
            (IRI), Half-car Roughness Index (HRI), Ride Quality
          </li>
          <li>- Index (RQI), and Ride Number (RN)</li>
          <li>
            - Plots true profile, California profilograph profile, and rolling
            straightedge profile
          </li>
          <li>- Equipped with variable high and low pass filter options</li>
          <li>- Contains automatic bump detection software</li>
          <li>
            - Capable of displaying “true” profile, rolling straightedge, and
            California type profilograph profile on screen
          </li>
          <li>
            - Identifies location of “out-of-specification” bumps and dips
          </li>
          <li>- Bumps can be located easily using system’s odometer mode</li>
          <li>
            - Equipped with the following export file options: PPF format, ERD
            format, Texas PRO format, comma separated variable (CSV) format and
            generated report tables format (HTML)
          </li>
        </ul>
      </div>

      <div id='options' className='mt-8 text-center md:text-left'>
        <h3 className='text-xl font-extrabold text-amesRed underline'>
          Available Options
        </h3>

        <section className='grid lg:grid-cols-2 gap-5 justify-center w-full mt-4'>
          <OptionsCard
            href='/products/transverse-profiling-system'
            src='/images/TransverseImagingProductGrid.jpg'
            alt='Transverse Imaging System'
            title='Transverse Profiling System'
            text='Our Transverse Profiling System can be integrated with a Longitudinal Profiler to measure rutting and cross-slope as well as profile!'
          />
          <OptionsCard
            src='/images/MacrotextureDataCollectionCardImage.jpg'
            alt='Macrotexture Data Collection'
            title='Macrotexture Data Collection'
            text='Collect Macrotexture and Profile Data at the same time, from the same sensor! Texture indices can be calculated later, including Mean Profile Depth (MPD), RMS, ETD, Ra, Rq, Rsk, Rku, VAR, and Length. MPD can be calculated according to ISO 13473-1:2019E or ISO 13473-1:1997. This option requires our Ames Single Point Sensors.'
          />
          <OptionsCard
            href='/products/ames-gps-dmi'
            src='/images/ProGPS-DMICardImage.jpg'
            alt='Profiler GPS-DMI'
            title='Profiler GPS-DMI'
            text='The Profiler GPS-DMI option uses our Pro GPS-DMI system in place of a traditional wheel-mounted encoder. This option removes the need to do distance calibrations! It also allows for using GPS data to define the start and stop locations of data collection rather than an autotrigger sensor.'
          />
          <OptionsCard
            src='/images/SoftwareProductGrid.jpg'
            alt='GPS Tracer'
            title='GPS Tracer'
            text='The GPS Tracer option displays your current location on a profile trace from a previously collected run. This option is useful for marking bumps and dips.'
          />
          <OptionsCard
            src='/images/WheelEncoderCardImage.jpg'
            alt='Wheel Encoder'
            title='Wheel Encoder'
            text='We offer traditional wheel-mounted encoders if you are working in an area with poor-to-nonexistent GPS reception.'
          />
          <OptionsCard
            src='/images/AutoTriggerCardImage.jpg'
            alt='AutoTrigger (Cone or Downward)'
            title='AutoTrigger (Cone or Downward)'
            text='We offer both downward facing and sideways facing autotrigger options for triggering start, stop, and event locations by tape or cone.'
          />
          <OptionsCard
            src='/images/SurveyProFrameCardImage.jpg'
            alt='Survey Pro Frame'
            title='Survey Pro Frame'
            text='Our Survey Pro Frame is a permanently mounted alternative to our standard frame. This frame supports a third sensor mounted in the center wheeltrack.'
          />
          <OptionsCard
            src='/images/AmbientSensorsCardImage.jpg'
            alt='Ambient Temperature, Humidity Sensors'
            title='Ambient Temperature, Humidity Sensors'
            text='Add ambient temperature and humidity sensors to your profiler!'
          />
        </section>
      </div>
    </div>
  );
}
