import CTABanner from '@/components/CTABanner';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsConeStriped } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Ames Engineering | Products',
  description: 'Ames Engineering Products.',
};

export default function AllProducts() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 px-10 2xl:px-80 pt-14'>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Our Products
        </h3>
        <Button>
          <a
            href='https://api.ipospays.com/v1/sl/jWfeo_170925135559 '
            target='_blank'
          >
            Pay Invoice Online
          </a>
        </Button>
      </div>

      <ProductGrid />

      <div className='mt-20'>
        <CTABanner
          text='Onsite Demonstrations and Consultation'
          subText='Foremost in developing sensor technology for pavement
              measurements.'
          btnText='Make an Appointment!'
          icon={<BsConeStriped className='w-14 h-14' />}
          btnIcon={
            <FaCalendarAlt className='hidden group-hover:flex w-4 h-4' />
          }
        />
      </div>
    </div>
  );
}
