import CTABanner from '@/components/CTABanner';
import ProductGrid from '@/components/ProductGrid';
import { BsConeStriped } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Ames Engineering | Products',
  description: 'Ames Engineering Products.',
};

export default function AllProducts() {
  return (
    <div>
      <div className='px-10 2xl:px-80 pt-14'>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          Our Products
        </h3>
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
