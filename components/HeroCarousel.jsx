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
      className='relative'
      data-twe-carousel-init
      data-twe-ride='carousel'
      data-twe-interval='10000'
      data-twe-wrap='true'
      data-twe-touch='true'
      data-twe-keyboard='true'
    >
      {/* <!--Carousel indicators--> */}
      <div
        className='absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0'
        data-twe-carousel-indicators
      >
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='0'
          data-twe-carousel-active
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='1'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-twe-target='#carouselExampleCaptions'
          data-twe-slide-to='2'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 3'
        ></button>
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
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover'
            alt='...'
          />
          <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
            <h5 className='text-xl'>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
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
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover'
            alt='...'
          />
          <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
            <h5 className='text-xl'>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
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
            className='block w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover'
            alt='...'
          />
          <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
            <h5 className='text-xl'>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
