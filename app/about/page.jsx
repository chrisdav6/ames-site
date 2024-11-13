import Image from 'next/image';

export const metadata = {
  title: 'Ames Engineering | Our Company',
  description:
    'Ames Engineering is at the forefront in the development of Laser-based pavement measurement equipment.',
};

export default function OurCompany() {
  return (
    <div className='w-full px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          About Ames Engineering
        </h3>

        <div className='flex flex-col lg:flex-row gap-6 mt-6 text-center md:text-left text-lg'>
          <div className='lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl'>
            <p className='font-bold'>
              Ames Engineering is at the forefront in the development of
              Laser-based pavement measurement equipment.
            </p>

            <p className='mt-4'>
              Over the years, we have worked side-by-side with the paving
              industry and government agencies to develop systems that yield
              exceptional data accuracy and performance. Starting with the
              original Ames Profilograph, we have continually pushed the bounds
              with our TriODS sensor, then our LMI RoLine- and Gocator-based
              sensors, and now with our Transverse and Texture measurement
              sensors, all being run by our ever-improving Ames Profiler
              software.
            </p>

            <p className='mt-4'>
              Ames Engineering, Inc is a privately held Iowa Corporation that
              continues to operate as the leading manufacturer of road profiling
              and measuring equipment, including profilographs, road profilers,
              texture profilers and texture meters. We’re proud to do as much of
              the manufacturing of our products in-house as possible.
            </p>
          </div>
          <div>
            <Image
              src='/images/aboutAmes.png'
              width={1000}
              height={1000}
              alt='About Ames Engineering'
              className='shadow-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
