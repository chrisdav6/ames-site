import Image from 'next/image';
import Link from 'next/link';
import ProductGridItem from './ProductGridItem';

export default function ProductGrid() {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-10 2xl:px-80 py-10'>
      <ProductGridItem
        href='/products/8300-high-speed-profiler'
        src='/images/HighSpeedProfilerProductGrid.jpg'
        alt='High Speed Inertial Profiler - Model 8300'
        title='High Speed Inertial Profiler'
        subTitle='Model 8300'
      />

      <ProductGridItem
        href='/products/transverse-profiling-system'
        src='/images/TransverseImagingProductGrid.jpg'
        alt='Transverse Imaging System'
        title='Transverse Imaging System'
        subTitle='Rut Depth Measurement'
      />

      <ProductGridItem
        href='/products/6300-lightweight-profiler'
        src='/images/LightweightProfilerProductGrid.jpg'
        alt='6300 Lightweight Profiler'
        title='Lightweight Inertial Profiler'
        subTitle='Model 6300'
      />

      <ProductGridItem
        href='/products/4200-profilograph'
        src='/images/ProfilographProductGrid.jpg'
        alt='Profilograph Upgrades'
        title='Profilograph Upgrades'
        subTitle='Model 4200 Tablet Upgrades'
      />
    </section>
  );
}
