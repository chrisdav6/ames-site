import Link from 'next/link';
import { BsConeStriped } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';

export default function CTABanner() {
  return (
    <section className='2xl:px-80 md:mt-10'>
      <div className='flex flex-col text-center md:flex-row md:text-left items-center justify-between bg-[#F0F0F0] p-5'>
        <div className='flex items-center gap-2 text-[#202020]'>
          <div className='hidden lg:block'>
            <BsConeStriped className='w-14 h-14' />
          </div>
          <div>
            <h3 className='text-2xl font-bold'>
              Onsite Demonstrations and Consultation
            </h3>
            <p className='text-md mt-2 md:mt-0'>
              Foremost in developing sensor technology for pavement
              measurements.
            </p>
          </div>
        </div>
        <div className='mt-5 md:mt-0'>
          <Link
            href='/sales/salesRequest'
            className='flex items-center gap-1 w-fit px-3 py-2 border border-[#CC0000] bg-[#CC0000] text-white hover:bg-white hover:text-[#CC0000] transition duration-300 group'
          >
            Make an Appointment!
            <span>
              <FaCalendarAlt className='hidden group-hover:flex w-4 h-4' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
