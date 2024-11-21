import Image from 'next/image';
import Link from 'next/link';
import AmesGoogleMap from '@/components/AmesGoogleMap';
import { FaBoxOpen, FaWrench } from 'react-icons/fa';
import { PiPhoneCallBold } from 'react-icons/pi';

export const metadata = {
  title: 'Ames Engineering | Contact',
  description: 'Call or Email us for Sales or Technical Support!',
};

export default function MainContact() {
  return (
    <div>
      <AmesGoogleMap />

      <div className='flex flex-col md:flex-row px-10 2xl:px-80 pt-14 gap-10'>
        <div className='w-full md:w-1/2'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Corporate Office
          </h3>

          <Image
            src='/images/amesContact.jpg'
            width={600}
            height={600}
            alt='Contact Ames Engineering'
            className='mt-6 shadow-md'
          />
        </div>

        <div className='w-full md:w-1/2'>
          <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
            Contact Us
          </h3>

          <address className='mt-6 text-center md:text-left text-lg not-italic'>
            1293 Xe Place
            <br />
            Ames, IA 50014
          </address>

          <p className='text-lg'>
            <a
              href='tel:5152928194'
              className='flex items-center mx-auto md:mx-0 w-fit gap-1 hover:text-amesRed font-bold transition duration-300'
            >
              <PiPhoneCallBold />
              515-292-8194
            </a>
          </p>
          <p className='text-lg mt-5'>
            <Link
              href='/sales/salesRequest'
              className='flex items-center mx-auto md:mx-0 w-fit gap-1 hover:text-amesRed font-bold transition duration-300'
            >
              <FaBoxOpen />
              Sales Request
            </Link>
          </p>
          <p className='text-lg'>
            <Link
              href='/support/supportRequest'
              className='flex items-center mx-auto md:mx-0 w-fit gap-1 hover:text-amesRed font-bold transition duration-300'
            >
              <FaWrench />
              Support Request
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
