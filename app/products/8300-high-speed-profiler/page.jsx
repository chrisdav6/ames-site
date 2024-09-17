import ImageSwiper from '@/components/ImageSwiper';

export const metadata = {
  title: 'Ames Engineering | 8300 High Speed Inertial Road Profiler',
  description:
    'The Ames High Speed Inertial Road Profiler allows for smoothness measurement of a roadway at up to 70 MPH.',
};

const images = [
  { src: '/images/AccuTexture100ProductGrid.jpg', alt: 'First' },
  { src: '/images/SoftwareProductGrid.jpg', alt: 'Second' },
];

export default function HighSpeedProfiler8300() {
  return (
    <div className='px-10 2xl:px-80 pt-14'>
      <div>
        <h3 className='mx-auto md:mx-0 text-2xl font-bold bg-amesRed w-fit py-2 px-3 text-white'>
          8300 High Speed Inertial Road Profiler
        </h3>
      </div>

      {/* Images */}
      <div className='mt-10'>
        <ImageSwiper images={images} />
      </div>
    </div>
  );
}
