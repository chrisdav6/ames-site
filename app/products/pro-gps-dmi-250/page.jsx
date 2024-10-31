import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';

export const metadata = {
  title: 'Ames Engineering | All-In-One GPS Distance Measuring Instrument',
  description: 'An easy-to-use GPS DMI based on our Pro GPS-DMI system.',
};

export default function ProGPSDMI250() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Pro GPS-DMI 250
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/ProGPSDMI250ProductImage.jpg'
          fill
          alt='Pro GPS-DMI 250'
          className='w-full object-cover object-[-150px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesGPSDMIPro250Brochure.pdf' target='_blank'>
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
          The Ames <span className='font-bold'>Pro GPS-DMI 250</span> is an
          all-in-one version of our Pro GPS-DMI for users wanting the most
          straightforward distance measurement system possible. It uses DGPS
          signals to measure linear distance, with data from the OBD-II port on
          your vehicle for a backup should you lose GPS signal. The built-in
          4-line LCD screen is sunlight-readable and backlit, and 4 buttons
          provide simple operation. Distance measurements are accurate to within
          0.15% of measured distance. The unit does not require calibration, is
          highly portable, and can easily be moved from vehicle to vehicle in
          minutes. There is no hard wiring to the vehicle required.
        </p>

        <div className='flex flex-col md:flex-row mt-8 gap-4'>
          <PhotoWithCaption
            image='/images/dmi250CardImage-2.jpg'
            alt='Ames Pro GPS-DMI 250'
            caption='Pro GPS-DMI 250'
          />
        </div>

        <div className='mt-6 font-bold '>
          <span className='block mt-2'>
            - Accurate to within 0.15% of measured distance
          </span>
          <span className='block'>- Does not require distance calibration</span>
          <span className='block'>
            - Built-in LCD display for simple operation
          </span>
          <span className='block'>
            - Displays GPS Coordinates when the vehicle is stopped
          </span>
          <span className='block'>
            - Includes Display Hold and Interval functions
          </span>
          <span className='block'>
            - Units are selectable between Feet, Miles, Meters, and Kilometers
          </span>
          <span className='block'>
            - Uses Garmin GPS receiver as distance measurement signal
          </span>
          <span className='block'>
            - Connects to OBD-II port on a compatible vehicle for increased
            accuracy
          </span>
          <span className='block'>- No vehicle wiring required</span>
        </div>
      </div>
    </div>
  );
}
