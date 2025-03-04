import ProductGridItem from './ProductGridItem';

export default function ProductGrid() {
  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center w-full px-10 2xl:px-80 pt-14'>
      <ProductGridItem
        href='/products/8300-high-speed-profiler'
        src='/images/HighSpeedProfilerProductGrid.jpg'
        alt='High Speed Inertial Profiler - Model 8300'
        title='High Speed Inertial Profiler'
        subTitle='Model 8300'
      />

      {/* <ProductGridItem
        href='/products/8300-stop-and-go-profiler'
        src='/images/StopAndGoProfilerProductGrid3.jpg'
        alt='Stop and Go High Speed Inertial Profiler - Model 8300'
        title='Stop and Go Inertial Road Profiler'
        subTitle='Model 8300'
        absoulteText='New Product!'
      /> */}

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

      {/* <ProductGridItem
        href='/products/4200-profilograph'
        src='/images/ProfilographProductGrid.jpg'
        alt='Profilograph Upgrades'
        title='Profilograph Upgrades'
        subTitle='Model 4200 Tablet Upgrades'
      /> */}

      <ProductGridItem
        href='/products/laser-texture-scanner-model-9400'
        src='/images/LaserTextureScannerProductGrid.jpg'
        alt='Laser Texture Scanner'
        title='Laser Texture Scanner'
        subTitle='Models 9400 & 9400HD'
      />

      <ProductGridItem
        href='/products/laser-texture-scanner-model-9500'
        src='/images/RapidTextureScannerProductGrid.jpg'
        alt='Rapid Texture Scanner'
        title='Rapid Texture Scanner'
        subTitle='Model 9500'
      />

      <ProductGridItem
        href='/products/real-time-profiler'
        src='/images/RealTimeProfilerProductGrid.jpg'
        alt='Real Time Profiler'
        title='Real Time Profiler'
        subTitle='Model 7200 RTP'
      />

      <ProductGridItem
        href='/products/ames-gps-dmi'
        src='/images/ProGPSDMIProductGrid.jpg'
        alt='Pro GPS-DMI'
        title='Pro GPS-DMI'
        subTitle='Pro GPS-DMI Options'
      />

      <ProductGridItem
        href='/products/lmi-gocator-laser'
        src='/images/LMIGocatorLaserProductGrid.jpg'
        alt='Concrete Line Laser'
        title='Concrete Line Laser'
        subTitle='LMI 5K Gocator'
      />

      <ProductGridItem
        href='/products/ames-accutexture-100'
        src='/images/AccuTexture100ProductGrid.jpg'
        alt='AccuTexture 100'
        title='AccuTexture 100'
        subTitle='Acuity AR550'
      />

      <ProductGridItem
        href='/products/software-data-analysis'
        src='/images/SoftwareProductGrid.jpg'
        alt='Software'
        title='Software'
        subTitle='Data Management'
      />
    </section>
  );
}
