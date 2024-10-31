import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PhotoWithCaption from '@/components/PhotoWithCaption';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';

export const metadata = {
  title: 'Ames Engineering | GPS Distance Measurement Instruments',
  description:
    'Our Pro GPS-DMI products use a GPS receiver to measure pavement distances. Accurate to within 0.2% distance measurement.',
};

export default function ProGPSDMI() {
  return (
    <div className='w-full justify-center pt-10 px-6 2xl:px-80 md:pt-14'>
      <div>
        <h1 className='mx-auto text-center md:text-left md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Pro GPS-DMI
        </h1>
      </div>

      {/* Images */}
      <div className='mt-4 w-full h-[300px] md:h-[600px] relative'>
        <Image
          src='/images/ProGPSDMIProductImage.jpg'
          fill
          alt='Ames Pro GPS DMI'
          className='w-full object-cover object-[-110px] md:object-center'
          priority
        />
      </div>

      {/* Product Buttons */}
      <div className='flex items-center justify-center flex-wrap md:justify-start gap-2 mt-6'>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesGPSDMIBrochure.pdf' target='_blank'>
            GPS-DMI Brochure
          </Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesGPSDMIPro100Brochure.pdf' target='_blank'>
            DMI 100 Brochure
          </Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesGPSDMIPro250Brochure.pdf' target='_blank'>
            DMI 250 Brochure
          </Link>
        </Button>
        <Button asChild className='px-4 py-5 text-lg hover:bg-amesRed'>
          <Link href='/pdf/AmesGPSDMIProLaptopBrochure.pdf' target='_blank'>
            DMI Laptop Brochure
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
          The Ames <span className='font-bold'>Pro GPS-DMI</span> is a Distance
          Measurement Instrument that uses a GPS receiver to measure pavement
          distances, replacing traditional encoder-based DMI systems. Nothing
          else on the market today works more efficiently to guarantee accurate
          distance measurement.{' '}
          <span className='font-bold'>
            The Pro GPS-DMI is accurate to within 0.2% distance measurement,
            with no calibration needed!
          </span>{' '}
          We offer different versions to best suit your needs, be it a simple
          LCD readout, collection on a laptop with our GPS-DMI Display software,
          or collection on a laptop with a connected camera.
        </p>

        <p className='mt-6'>
          Simply plug the Pro GPS-DMI into a vehicle’s OBD-II port, attach the
          magnetic mounted GPS receiver, and go to work.{' '}
          <span className='font-bold'>
            Moving the Pro GPS-DMI from one vehicle to another can be done in
            minutes.
          </span>{' '}
          LED indicators quickly alert the user to quality issues of the GPS or
          vehicle speed sensor data. The main distance measurement comes from a
          5Hz Garmin GPS receiver, with a connection to the vehicle’s OBD-II
          port (on compatible vehicles which use a CAN bus diagnostics
          interface) used as a backup in the case of GPS reception loss. The GPS
          receiver continuously calibrates the OBD-II backup as you drive.
        </p>

        <div className='mt-8'>
          <p className='font-bold '>
            We offer several display options depending on your needs:
          </p>
          <span className='block mt-2'>
            - The <span className='font-bold'>Pro GPS-DMI 100</span> uses a
            Nitestar display head that may already be familiar for the operator.
          </span>
          <span className='block mt-1'>
            - The <span className='font-bold'>Pro GPS-DMI 250</span> features a
            built-in LCD display.
          </span>
          <span className='block mt-1'>
            - The <span className='font-bold'>Pro GPS-DMI Laptop</span> and{' '}
            <span className='font-bold'>HD Imaging</span> use a USB connection
            to a laptop with our GPS-DMI Display software installed. The
            software measures distance, collects GPS station information, and
            (optionally) captures images at regular intervals. This data can
            then be exported as a .kml file for use in viewing software such as
            Google Earth. The collected images are geo-tagged.
          </span>
        </div>

        <div className='flex flex-col md:flex-row mt-10 gap-4'>
          <PhotoWithCaption
            image='/images/dmi100CardImage.jpg'
            alt='Pro GPS DMI 100'
            caption='Pro GPS DMI 100'
          />
          <PhotoWithCaption
            image='/images/dmi250CardImage.jpg'
            alt='Pro GPS DMI 250'
            caption='Pro GPS DMI 250'
          />
          <PhotoWithCaption
            image='/images/dmiLaptopCardImage.jpg'
            alt='Pro GPS-DMI Laptop'
            caption='Pro GPS-DMI Laptop'
          />
        </div>

        <div className='mt-10'>
          <p className='max-w-4xl'>
            We developed these devices for State, County, and local
            transportation engineering and maintenance teams, pavement
            contractors, and utilities so you can work more efficiently and
            effectively!
          </p>
          <span className='block mt-4'>
            - <span className='font-bold'>Easy to Use</span>
          </span>
          <span className='block mt-1'>
            -{' '}
            <span className='font-bold'>
              No wiring required – saving you valuable time and money!
            </span>
          </span>
          <span className='block mt-1'>
            - <span className='font-bold'>Portable - </span>Moving the GPS-DMI
            from one vehicle to another can be done in minutes. No permanent
            wiring required.
          </span>
          <span className='block mt-1'>
            - <span className='font-bold'>Self Calibrating - </span>Tire
            pressure, tire wear, and temperature changes are irrelevant. The
            Ames GPS-DMI calibrates continuously as the vehicle is driven.
          </span>
          <span className='block mt-1'>
            - <span className='font-bold'>Complete Solution - </span>Measures
            distances in foot, mile, meter, kilometer with current speed and
            memory event coding.
          </span>
        </div>

        {/* Table */}
        <div className='mt-10'>
          <Table className='text-lg bg-gray-100'>
            <TableHeader className='bg-amesRed'>
              <TableRow>
                <TableHead className='text-white'>Features</TableHead>
                <TableHead className='text-center'>
                  DMI 100
                  <span className='block text-sm -mt-1'>
                    <a
                      href='https://mhcorbin.com/Products/Product-Detail/Article/115/GPS-DMI-PRO'
                      target='_blank'
                    >
                      Available Through MH Corbin
                    </a>
                  </span>
                </TableHead>
                <TableHead className='text-center'>DMI 250</TableHead>
                <TableHead className='text-center'>Laptop</TableHead>
                <TableHead className='text-center'>HD Imaging</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>
                  Display Interface Type
                </TableCell>
                <TableCell className='text-center'>
                  User Supplied Display
                </TableCell>
                <TableCell className='text-center'>
                  Built-In LCD Display
                </TableCell>
                <TableCell className='text-center'>
                  User Supplied Laptop
                </TableCell>
                <TableCell className='text-center'>
                  User Supplied Laptop
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  GPS Receiver Location
                </TableCell>
                <TableCell className='text-center'>
                  Magnetically mounted
                  <br />
                  outside of vehicle
                </TableCell>
                <TableCell className='text-center'>
                  Magnetically mounted
                  <br />
                  outside of vehicle
                </TableCell>
                <TableCell className='text-center'>
                  Magnetically mounted
                  <br />
                  outside of vehicle
                </TableCell>
                <TableCell className='text-center'>
                  Magnetically mounted
                  <br />
                  outside of vehicle
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Total Distance Measurement
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium max-w-2'>
                  Interval Distance Measurement
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium max-w-2'>
                  OBDII Backup During GPS Signal Loss
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  GPS Coordinate Display
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  Google Earth Logging
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>
                  User Event Logging
                </TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='font-medium'>HD Image Logging</TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'></TableCell>
                <TableCell className='text-center'>
                  <Check className='text-green-500 mx-auto' size={40} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Testimonials */}
        <div className='mt-16'>
          <h2 className='mx-auto text-center md:text-left md:mx-0 text-xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Testimonials
          </h2>

          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
