'use client';
import { useEffect } from 'react';

export default function HeroCarousel() {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import('tw-elements');
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id='carouselExampleCaptions'
      className='relative z-[-10]'
      data-twe-carousel-init
      data-twe-ride='carousel'
      data-twe-interval='10000'
      data-twe-wrap='true'
      data-twe-touch='true'
      data-twe-keyboard='true'
    >
      {/* <!--Carousel indicators--> */}
      <div
        className='absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0 md:bottom-24'
        data-twe-carousel-indicators
      >
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='0'
          data-twe-carousel-active
          className='relative mx-[3px] box-content h-[3px] w-[150px] lg:h-[4px] lg:w-[300px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-current='true'
          aria-label='Slide 1'
        >
          <span className='absolute top-[-30px] left-[510px] font-base lg:font-bold text-xl text-white'>
            1
          </span>
        </button>
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='1'
          className='relative mx-[3px] box-content h-[3px] w-[150px] lg:h-[4px] lg:w-[300px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 2'
        >
          <span className='absolute top-[-30px] left-[510px] font-base lg:font-bold text-xl text-white'>
            2
          </span>
        </button>
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='2'
          className='relative mx-[3px] box-content h-[3px] w-[150px] lg:h-[4px] lg:w-[300px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 3'
        >
          <span className='absolute top-[-30px] left-[510px] font-base lg:font-bold text-xl text-white'>
            3
          </span>
        </button>
      </div>

      {/* <!--Carousel items--> */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {/* <!--First item--> */}
        <div
          className='relative float-left -mr-[100%] w-full transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none'
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src='/images/slider-1.jpg'
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover brightness-[60%]'
            alt='...'
          />
          <div className='absolute inset-x-[15%] top-[25%] md:top-[28%] xl:top-[35%] py-5 text-center text-white md:block'>
            <h5
              className='text-5xl lg:text-7xl'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              Proven Measurement Products
            </h5>
            <p
              className='text-2xl lg:text-3xl mt-3'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              Sensor Technology | Pavement Measurement
            </p>
          </div>
        </div>
        {/* <!--Second item--> */}
        <div
          className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none'
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src='/images/slider-2.jpg'
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover brightness-[60%]'
            alt='...'
          />
          <div className='absolute inset-x-[15%] top-[25%] md:top-[28%] xl:top-[35%] py-5 text-center text-white md:block'>
            <h5
              className='text-5xl lg:text-7xl'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              Dedicated Support
            </h5>
            <p
              className='text-2xl lg:text-3xl mt-3'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              We aim to serve our customers with unmatched service
            </p>
          </div>
        </div>
        {/* <!--Third item--> */}
        <div
          className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none'
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src='/images/slider-3.jpg'
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover brightness-[60%]'
            alt='...'
          />
          <div className='absolute inset-x-[15%] top-[25%] md:top-[28%] xl:top-[35%] py-5 text-center text-white md:block'>
            <h5
              className='text-5xl lg:text-7xl'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              Industry Leading Solutions
            </h5>
            <p
              className='text-2xl lg:text-3xl mt-3'
              style={{
                textShadow: '0px 0px 10px #000000, 0px 0px 10px #000000',
              }}
            >
              At the forefront in the development of sensor technology for
              pavement measurements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
