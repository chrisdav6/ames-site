import Image from 'next/image';
import Link from 'next/link';

export default function ProductGrid() {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-10 2xl:px-80 py-10'>
      {/* TODO - Make Individual Product Item Component - pass href, src, text as props */}
      <Link
        href='/products/8300-high-speed-profiler'
        className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
      >
        <div className='relative w-full h-fit'>
          <Image
            src='/images/HighSpeedProfilerProductGrid.jpg'
            alt='High Speed Inertial Profiler - Model 8300'
            className='object-cover xl:group-hover:brightness-75 transition duration-300'
            width={1000}
            height={1000}
          />
        </div>
        <div className='text-center p-4 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
          <h2 className='text-xl font-bold'>High Speed Inertial Profiler</h2>
          <p className='text-lg'>Model 8300</p>
        </div>
      </Link>

      <Link
        href='/products/transverse-profiling-system'
        className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
      >
        <div className='relative w-full h-fit'>
          <Image
            src='/images/TransverseImagingProductGrid.jpg'
            alt='High Speed Inertial Profiler - Model 8300'
            className='object-cover xl:group-hover:brightness-75 transition duration-300'
            width={1000}
            height={1000}
          />
        </div>
        <div className='text-center p-4 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
          <h2 className='text-xl font-bold'>Transverse Imaging System</h2>
          <p className='text-lg'>Rut Depth Measurement</p>
        </div>
      </Link>

      <Link
        href='/products/6300-lightweight-profiler'
        className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
      >
        <div className='relative w-full h-fit'>
          <Image
            src='/images/LightweightProfilerProductGrid.jpg'
            alt='High Speed Inertial Profiler - Model 8300'
            className='object-cover xl:group-hover:brightness-75 transition duration-300'
            width={1000}
            height={1000}
          />
        </div>
        <div className='text-center p-4 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
          <h2 className='text-xl font-bold'>Lightweight Inertial Profiler</h2>
          <p className='text-lg'>Model 6300</p>
        </div>
      </Link>

      <Link
        href='/products/4200-profilograph'
        className='flex flex-col w-full bg-gray-200 group hover:shadow-lg'
      >
        <div className='relative w-full h-fit'>
          <Image
            src='/images/ProfilographProductGrid.jpg'
            alt='High Speed Inertial Profiler - Model 8300'
            className='object-cover xl:group-hover:brightness-75 transition duration-300'
            width={1000}
            height={1000}
          />
        </div>
        <div className='text-center p-4 xl:group-hover:bg-[#CC0000] xl:group-hover:text-white transition duration-300'>
          <h2 className='text-xl font-bold'>Profilograph Upgrades</h2>
          <p className='text-lg'>Model 4200 Tablet Upgrades</p>
        </div>
      </Link>
    </section>
  );
}
