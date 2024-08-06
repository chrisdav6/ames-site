import Link from 'next/link';
import { BsConeStriped } from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function CTABanner() {
  return (
    <section className='2xl:px-80 mt-10'>
      <div className='flex flex-col text-center md:flex-row md:text-left items-center justify-between bg-[#F0F0F0] p-5'>
        <div className='flex items-center gap-2 text-[#202020]'>
          <div className='hidden lg:block'>
            <BsConeStriped className='w-14 h-14' />
          </div>
          <div>
            <h3 className='text-2xl font-bold'>
              Onsite Demonstrations and Consultation
            </h3>
            <p className='text-md mt-1 max-w-[400px] mx-auto md:mx-0 lg:max-w-full'>
              Ames Engineering is foremost in developing sensor technology for
              pavement measurements.
            </p>
          </div>
        </div>
        <div className='mt-5 md:mt-0'>
          <Link
            href='/all-products'
            className='flex items-center gap-1 w-fit px-3 py-2 border border-[#CC0000] bg-[#CC0000] text-white hover:bg-white hover:text-[#CC0000] transition duration-300 group'
          >
            See All Products
            <span>
              <IoIosArrowDroprightCircle className='hidden group-hover:flex w-5 h-5' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
