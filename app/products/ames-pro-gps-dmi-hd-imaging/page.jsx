import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | HD Imaging Pro GPS-DMI',
  description:
    'The HD Imaging Pro GPS-DMI includes a High-Definition Camera to take images of the roadway.',
};

export default function ProGPSDMIHDImaging() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Pro GPS-DMI HD Imaging
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/ProGPSDMILaptopProductImage.jpg'
          fill
          alt='Pro GPS-DMI Laptop'
          className='w-full object-cover object-[-150px] md:object-center'
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
          The Ames <span className='font-bold'>Pro GPS-DMI HD Imaging</span> is
          the same system as the Pro GPS-DMI Laptop but with the addition of a
          HD camera. Images can be automatically taken at regular intervals and
          geo-tagged with the time, date, distance, and GPS location. It uses
          DGPS signals to measure linear distance along with input from the OBD
          II port from your vehicle for increased accuracy. The unit comes with
          Ames proprietary data collection and logging software. It features
          file logging capabilities that enable you to generate a .kml file of
          your traveled route, that can later be viewed in Google Earth.
        </p>

        <p className='mt-6'>
          The camera images are also attached to the .kml file for accurate
          roadway reference of each image. Accurate to within 0.15% of measured
          distance. The unit does not require calibration, is highly portable
          and can easily be moved from vehicle to vehicle in minutes. There is
          no hard wiring to the vehicle required.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/dmiLaptopCardImage.jpg'
            alt='Ames Pro GPS-DMI Laptop'
            caption='Pro GPS-DMI Laptop'
          />
        </div>

        <div className='mt-6 font-bold '>
          <span className='block mt-2'>
            - Accurate to within 0.15% of measured distance
          </span>
          <span className='block'>- Does not require distance calibration</span>
          <span className='block'>
            - Uses Garmin GPS receiver as distance measurement signal
          </span>
          <span className='block'>
            - Connects to OBD-II port on a compatible vehicle for increased
            accuracy
          </span>
          <span className='block'>- No vehicle wiring required</span>
          <span className='block'>
            - Can be used with any Windows based laptop
          </span>
          <span className='block'>
            - Includes Ames windows based software application
          </span>
          <span className='block'>
            - Generates .kml log file with gps coordinates and camera images
            attached
          </span>
          <span className='block'>
            - Camera image logging using standard .jpeg format
          </span>
          <span className='block'>
            - Camera images geo-tagged with date, time, gps and distance
            location
          </span>
        </div>
      </div>
    </div>
  );
}
