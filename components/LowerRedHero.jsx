import Link from 'next/link';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function LowerRedHero() {
  return (
    <section className='relative hidden md:grid md:grid-cols-3 w-full 2xl:px-80 text-white -mt-20 z-[30]'>
      <div className='bg-[#FF403F] p-5'>
        <h3 className='text-2xl font-bold'>Products &amp; Services</h3>
        <p className='text-md mt-4 2xl:max-w-[85%]'>
          Ames Engineering is foremost in developing sensor technology for
          pavement measurements.
        </p>
        <Link
          href='/all-products'
          className='flex items-center gap-1 w-fit border border-white px-3 py-2 mt-5 hover:bg-white hover:text-[#FF403F] transition duration-300 group'
        >
          See All Products
          <span>
            <IoIosArrowDroprightCircle className='hidden group-hover:flex w-5 h-5' />
          </span>
        </Link>
      </div>
      <div className='gap-4 bg-[#DC3130] p-5'>
        <h3 className='text-2xl font-bold'>New Product Innovations</h3>
        <p className='text-md mt-4 2xl:max-w-[85%]'>
          The latest innovation from Ames Engineering is here, learn more about
          our Profiler GPS-DMI.
        </p>
        <Link
          href='/products/ames-gps-dmi'
          className='flex items-center gap-1 w-fit border border-white px-3 py-2 mt-5 hover:bg-white hover:text-[#FF403F] transition duration-300 group'
        >
          Read More
          <span>
            <IoIosArrowDroprightCircle className='hidden group-hover:flex w-5 h-5' />
          </span>
        </Link>
      </div>
      <div className='gap-4 bg-[#CC0000] p-5'>
        <h3 className='text-2xl font-bold'>Industry Solutions</h3>
        <p className='text-md mt-4 2xl:max-w-[85%]'>
          Find industry news and learn how Ames Engineering is leading concrete
          profile technology to new standards.
        </p>
        <Link
          href='/resources'
          className='flex items-center gap-1 w-fit border border-white px-3 py-2 mt-5 hover:bg-white hover:text-[#FF403F] transition duration-300 group'
        >
          Research Reports
          <span>
            <IoIosArrowDroprightCircle className='hidden group-hover:flex w-5 h-5' />
          </span>
        </Link>
      </div>
    </section>
  );
}
